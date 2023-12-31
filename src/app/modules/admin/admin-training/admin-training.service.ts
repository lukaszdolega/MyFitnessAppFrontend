import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';
import { AdminTraining } from './model/adminTraining';

@Injectable({
  providedIn: 'root'
})
export class AdminTrainingService {

  constructor(private http: HttpClient) { }

  getTrainings(page: number, size: number): Observable<Page<AdminTraining>> {
    return this.http.get<Page<AdminTraining>>(`/api/admin/trainings?page=${page}&size=${size}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/admin/trainings/' + id);
  }
}
