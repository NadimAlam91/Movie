import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  url = "http://127.0.0.1:8000/api/getmovie"
  surl="http://127.0.0.1:8000/api/movieUpvote"
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(this.url,{headers:this.httpHeaders})
  }
  currentMovi(data:any,id:any):Observable<any>{
  console.log(id)
    return this.http.put(`${this.surl}/${id}/`, data)
  }
}
