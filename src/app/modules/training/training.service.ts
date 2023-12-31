import { Injectable } from '@angular/core';
import { Training } from '../common/model/training';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  getTrainings(page: number, size: number): Observable<Page<Training>> {
      return this.http.get<Page<Training>>(`/api/trainings?page=${page}&size=${size}`);
  }
}
