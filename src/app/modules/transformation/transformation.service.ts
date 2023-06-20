import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transformation } from './model/transformation';

@Injectable({
  providedIn: 'root'
})
export class TransformationService {

  constructor(private http: HttpClient) { }

  getTransformations(): Observable<Transformation[]> {
    return this.http.get<Transformation[]>("/api/transformations");
  }
}