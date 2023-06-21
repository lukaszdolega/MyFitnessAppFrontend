import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadResponse } from '../model/uploadResponse';

@Injectable({
  providedIn: 'root'
})
export class TransformationAddService {

  constructor(private http: HttpClient) { }

  saveNewTransformation(transformation: any): Observable<any>{
    return this.http.post<any>("/api/transformations", transformation);
  }

  uploadImage(formData: FormData): Observable<UploadResponse> {
    return this.http.post<UploadResponse>('/api/transformations/upload-image', formData);
  }
}
