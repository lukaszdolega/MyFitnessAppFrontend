import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transformation } from './model/transformation';
import { Page } from '../common/model/page';

@Injectable({
  providedIn: 'root'
})
export class TransformationService {

  constructor(private http: HttpClient) { }

  getTransformations(page: number, size: number): Observable<Page<Transformation>> {
    return this.http.get<Page<Transformation>>(`/api/transformations?page=${page}&size=${size}`);
  }
}