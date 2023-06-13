import { Injectable } from '@angular/core';
import { Training } from './model/training';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Training[]> {
      return this.http.get<Training[]>("/api/trainings");
  }
}
