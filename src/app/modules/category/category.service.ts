import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryTrainings } from './model/categoryTrainings';
import { CategoryDto } from '../training/training-add/model/categoryDto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryWithTrainings(slug: string, page: number, size: number): Observable<CategoryTrainings> {
    return this.http.get<CategoryTrainings>(`/api/categories/${slug}/trainings?page=${page}&size=${size}`);
  }

  getCategories(): Observable<Array<CategoryDto>>{
    return this.http.get<Array<CategoryDto>>("/api/categories");
  }
}
