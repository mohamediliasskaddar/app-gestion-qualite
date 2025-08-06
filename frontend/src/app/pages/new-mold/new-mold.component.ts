import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MouleService } from '../../services/moule.service';
import { IMoule } from '../../utils/models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-moule',
  templateUrl: './new-mold.component.html',
  imports: [ReactiveFormsModule, NgIf],
  styleUrls: ['./new-mold.component.css']
})
export class NewMoldComponent {
  mouleForm: FormGroup;
  isSubmitting = false;
  errorMsg: string | null = null;
  successMsg: string | null = null;

  constructor(
    private fb: FormBuilder,
    private mouleService: MouleService
  ) {
    this.mouleForm = this.fb.group({
      reference: ['', Validators.required],
      nbPlateaux: [1, [Validators.required, Validators.min(1), Validators.max(2)]]
    });
  }

  onSubmit() {
    this.errorMsg = null;
    this.successMsg = null;

    if (this.mouleForm.invalid) {
      this.mouleForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const payload: Partial<IMoule> = {
      reference: this.mouleForm.value.reference,
      nbPlateaux: this.mouleForm.value.nbPlateaux
    };

    this.mouleService.create(payload).subscribe({
      next: (newMoule) => {
        this.successMsg = `Moule créé avec ID ${newMoule.id}`;
        this.mouleForm.reset({ reference: '', nbPlateaux: 1 });
        this.isSubmitting = false;
      },
      error: (err: any) => {
        console.error('Erreur création moule', err);
        this.errorMsg = 'Erreur lors de la création du moule.';
        this.isSubmitting = false;
      }
    });
  }
}
