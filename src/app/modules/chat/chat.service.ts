import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  saveNewChat(chat: any): Observable<any> {
    return this.http.post<any>("/api/chats", chat);
  }
}
