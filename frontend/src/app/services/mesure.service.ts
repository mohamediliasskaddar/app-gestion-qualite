import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMesure } from '../utils/models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class MesureService {
  private readonly baseUrl = '/mesures';

  constructor(private api: ApiService) {}

  // Crée une nouvelle campagne de mesure avec ses moules et pièces.
  create(payload: any): Observable<IMesure> {
    return this.api.post<IMesure>(this.baseUrl, payload);
  }

  //update une mesure existante
  update(id: number, payload: any): Observable<IMesure> {
    return this.api.patch<IMesure>(`${this.baseUrl}/${id}`, payload);
  }

  // Éventuellement, récupérer la liste des campagnes de mesure
  getAll(): Observable<IMesure[]> {
    return this.api.get<IMesure[]>(this.baseUrl);
  }

  //list of all mesures
  getMesures(): Observable<IMesure[]> {
    return this.api.get<IMesure[]>(this.baseUrl);
  }
}
