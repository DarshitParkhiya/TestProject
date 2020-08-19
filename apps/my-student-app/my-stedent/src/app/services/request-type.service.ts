import { Injectable } from '@angular/core';
import { RequestType } from '../models/requestType';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class RequestTypeService {
  private areasUrl = 'http://localhost:5000/api/RequestType'; // URL to web api

  constructor(private http: HttpClient) {}

  getAllRequestType(): Observable<RequestType[]> {
    return this.http.get<RequestType[]>(`${this.areasUrl}/get`);
  }

  getRequestByType(type: string): Observable<RequestType> {
    return this.http.get<RequestType>(
      `${this.areasUrl}/getByType?type=${type}`
    );
  }
}
