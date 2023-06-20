import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transformation } from '../model/transformation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformationAddService {

  constructor(private http: HttpClient) { }

  saveNewTransformation(transformation: any): Observable<any>{
    return this.http.post<any>("/api/transformations", transformation);
  }
}
