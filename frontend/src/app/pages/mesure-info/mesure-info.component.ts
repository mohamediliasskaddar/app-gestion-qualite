import { Component, OnInit } from '@angular/core';
import { MesureService } from '../../services/mesure.service';
import { IMesure, IMoule } from '../../utils/models';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MouleService } from '../../services/moule.service';

@Component({
  selector: 'app-mesure-info',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './mesure-info.component.html',
  styleUrl: './mesure-info.component.css'
})
export class MesureInfoComponent implements OnInit {
  // This component can be used to display information about a specific mesure
  allMesures: IMesure[] = [];
  allMoules: IMoule[] = []; // Assuming moules are fetched from MouleService
  selectedMesure: IMesure | null = null;
  selectedMoule: IMoule | null = null;

  constructor( private mesureService: MesureService, private datePipe: DatePipe, private mouleService: MouleService) {}
  ngOnInit(): void {
    // Load all mesures and moules on initialization
    this.loadMesures();
    this.loadMoules();
  }

  // Method to load all mesures from the service
  loadMoules() {
    this.mouleService.getAll().subscribe(m => this.allMoules = m);
  }

  loadMesures() {
    this.mesureService.getMesures().subscribe(m => this.allMesures = m);
  }

  // Method to select a mesure for detailed view
  selectMesure(mesure: IMesure) {
    this.selectedMesure = mesure;
  }

 



}
