import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './model/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.url}/getAllMessages`);
  }

  createMessage(message: Message): Observable<any> {
    return this.http.post(`${this.url}/addMessage`, message);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
