import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingDetails } from './model/trainingDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingDetailsService {

  constructor(private http: HttpClient) { }

  getTrainingDetails(slug: string): Observable<TrainingDetails>{
    return this.http.get<TrainingDetails>("/api/trainings/" + slug);
  }
}
