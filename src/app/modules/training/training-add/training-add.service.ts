import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminTrainingUpdate } from '../../admin/admin-training-update/model/adminTrainingUpdate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingAddService {

  constructor(private http: HttpClient) { }

  saveNewTraining(training: any): Observable<any> {
    return this.http.post<any>("/api/trainings", training);
  }
}
