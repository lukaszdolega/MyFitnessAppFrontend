import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminTrainingUpdate } from './model/adminTrainingUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminTrainingUpdateService {

  constructor(private http: HttpClient) { }
  
  getTraining(id: number): Observable<AdminTrainingUpdate> {
    return this.http.get<AdminTrainingUpdate>("/api/admin/trainings/" + id);
  }
  
  savePost(id: number, value: AdminTrainingUpdate) {
    return this.http.put<AdminTrainingUpdate>('/api/admin/trainings/' + id, value)
  }
}
