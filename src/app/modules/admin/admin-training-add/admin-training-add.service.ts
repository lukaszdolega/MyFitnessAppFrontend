import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminTrainingUpdate } from '../admin-training-update/model/adminTrainingUpdate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTrainingAddService {

  constructor(private http: HttpClient) { }

  saveNewTraining(training: AdminTrainingUpdate): Observable<AdminTrainingUpdate>{
    return this.http.post<AdminTrainingUpdate>("/api/admin/trainings", training);
  }
}
