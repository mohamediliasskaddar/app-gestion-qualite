import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoule } from '../utils/models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class MouleService {
  private readonly baseUrl = '/moules';

  constructor(private api: ApiService) {}

  /** Crée un nouveau moule */
  create(payload: Partial<IMoule>): Observable<IMoule> {
    return this.api.post<IMoule>(this.baseUrl, payload);
  }

  // Récupère tous les moules existants 
  getAll(): Observable<IMoule[]> {
    return this.api.get<IMoule[]>(this.baseUrl);
  }
}



