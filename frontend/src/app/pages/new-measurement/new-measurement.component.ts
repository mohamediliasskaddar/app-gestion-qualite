import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { IMesure, IMoule } from '../../utils/models';
import { MouleService } from '../../services/moule.service';
import { MesureService } from '../../services/mesure.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


// Interfaces to type form groups
interface PieceGroup {
  numero: FormControl<number>;
  valeurPlateau1: FormControl<number | null>;
  valeurPlateau2: FormControl<number | null>;
}

interface MouleGroup {
  mouleId: FormControl<number | null>;
  quota: FormControl<number>;
  margeInf: FormControl<number>;
  margeSup: FormControl<number>;
  unite: FormControl<string>;
  nbPlateaux: FormControl<number>;
  pieces: FormArray<FormGroup<PieceGroup>>;
}

@Component({
  selector: 'app-new-measurement',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './new-measurement.component.html',
  styleUrls: ['./new-measurement.component.css']
})
export class NewMeasurementComponent implements OnInit {
  measurementForm!: FormGroup<{
    reference: FormControl<string>;
    selectedMesureId: FormControl<number | null>;
    dateMesure: FormControl<string>;
    taille: FormControl<string>;
    mesuresMoules: FormArray<FormGroup<MouleGroup>>;
  }>;
  allMoules: IMoule[] = [];
  allMesures: IMesure[] = []; 
  constructor(
    private fb: FormBuilder,
    private mouleService: MouleService,
    private mesureService: MesureService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadMoules();
    this.loadMesures();

    // Dynamically update validators when selectedMesureId changes
  this.measurementForm.get('selectedMesureId')!.valueChanges.subscribe(selectedId => {
    const refCtrl = this.measurementForm.get('reference');
    const dateCtrl = this.measurementForm.get('dateMesure');
    const tailleCtrl = this.measurementForm.get('taille');
    if (selectedId) {
      // Reference existante choisie : on retire les validateurs
      refCtrl!.clearValidators();
      dateCtrl!.clearValidators();
      tailleCtrl!.clearValidators();
    } else {
      // Nouvelle référence : on remet les validateurs
      refCtrl!.setValidators([Validators.required]);
      dateCtrl!.setValidators([Validators.required]);
      // Ajoute d'autres validateurs si besoin
    }
    refCtrl!.updateValueAndValidity();
    dateCtrl!.updateValueAndValidity();
    tailleCtrl!.updateValueAndValidity();
  });
  }

  private initForm() {
    this.measurementForm = this.fb.group({
      reference: this.fb.control<string>('', { validators: [Validators.required], nonNullable: true }),
     selectedMesureId: this.fb.control<number | null>(null),
      dateMesure: this.fb.control<string>(new Date().toISOString().substring(0, 10), { validators: [Validators.required], nonNullable: true }),
      taille: this.fb.control<string>('', { nonNullable: true }),
      mesuresMoules: this.fb.array<FormGroup<MouleGroup>>([])
    });
  }

  get mesuresMoules() {
    return this.measurementForm.controls.mesuresMoules;
  }
  get selectedMesure() {
    return this.allMesures.find(m => m.id === this.selectedMesureId) || null;
  }

  get selectedMesureId() {
  return this.measurementForm.get('selectedMesureId')?.value;
}

//load moules from service
  loadMoules() {
    this.mouleService.getAll().subscribe(m => this.allMoules = m);
  }

  loadMesures() {
    this.mesureService.getMesures().subscribe(m => this.allMesures = m);
  }

// Add a new mesure moule to the form
  addMesureMoule() {
    const gm = this.fb.group<MouleGroup>({
      mouleId: this.fb.control<number | null>(null, { validators: [Validators.required], nonNullable: false }),
      quota: this.fb.control<number>(0, { validators: [Validators.required], nonNullable: true }),
      margeInf: this.fb.control<number>(0, { validators: [Validators.required], nonNullable: true }),
      margeSup: this.fb.control<number>(0, { validators: [Validators.required], nonNullable: true }),
      unite: this.fb.control<string>('mm', { validators: [Validators.required], nonNullable: true }),
      nbPlateaux: this.fb.control<number>(1, { validators: [Validators.required], nonNullable: true }),
      pieces: this.fb.array<FormGroup<PieceGroup>>([])
    });
    this.mesuresMoules.push(gm);
  }
// Remove a mesure moule from the form
  removeMesureMoule(i: number) {
    this.mesuresMoules.removeAt(i);
  }
// Initialize pieces for a specific mesure moule
  initPieces(i: number) {
    const gm = this.mesuresMoules.at(i) as FormGroup<MouleGroup>;
    const nb = gm.controls.nbPlateaux.value;
    const fa = this.fb.array<FormGroup<PieceGroup>>([]);
    for (let n = 1; n <= 10; n++) {// Assuming 100 pieces max for simplicity i will use 10 
      fa.push(this.fb.group<PieceGroup>({
        numero: this.fb.control<number>(n, { nonNullable: true }),
        valeurPlateau1: this.fb.control<number | null>(null, { validators: [Validators.required], nonNullable: false }),
        valeurPlateau2: this.fb.control<number | null>(null, { nonNullable: false })
      }));
    }
    gm.setControl('pieces', fa);
  }

  onSubmit() {
    if (this.measurementForm.invalid) {
      // this.measurementForm.markAllAsTouched();
      alert('Veuillez corriger les erreurs dans le formulaire measurementForm .');
      return;
    }
    
    const formValue = this.measurementForm.getRawValue();
    // Prepare payload for the mesure creation
    const q_reference = this.selectedMesure ? this.selectedMesure.reference : formValue.reference;
    const q_dateMesure = this.selectedMesure ? this.selectedMesure.dateMesure : formValue.dateMesure;
    const q_taille = this.selectedMesure ? this.selectedMesure.taille : formValue.taille;

    const payload = {
      reference: q_reference,
      dateMesure: q_dateMesure,
      taille: q_taille,
      mesuresMoules: formValue.mesuresMoules.map(mm => ({
        mouleId: mm.mouleId,
        quota: mm.quota,
        margeInf: mm.margeInf,
        margeSup: mm.margeSup,
        unite: mm.unite,
        pieces: mm.pieces
      }))
    };
   if (this.selectedMesure) {
    // Mesure existe déjà : on met à jour (ajout de moules)
    this.mesureService.update(this.selectedMesure.id, payload).subscribe({
      next: res => alert('Mesure mise à jour' ),
      error: err => alert('Erreur mise à jour' )
    });
  } else {
    // Nouvelle mesure : création
    this.mesureService.create(payload).subscribe({
      next: res => alert('Mesure créée'),
      error: err => alert('Erreur création')
    });
  }
  }
  getPiecesArray(gm: FormGroup<MouleGroup>): FormArray<FormGroup<PieceGroup>> {
  return gm.get('pieces') as FormArray<FormGroup<PieceGroup>>;
}

}
