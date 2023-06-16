import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryTrainings } from './model/categoryTrainings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryWithTrainings(slug: string, page: number, size: number): Observable<CategoryTrainings> {
    return this.http.get<CategoryTrainings>(`/api/categories/${slug}/trainings?page=${page}&size=${size}`);
  }
}
