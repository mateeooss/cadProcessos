import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Processo } from '../interfaces/processo';
import { Pessoa } from '../../pessoa/interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  private apiUrl = 'http://localhost:8080/api/processo'

  constructor(private http:HttpClient) { }

  getAll(search:string=''): Observable<Array<Processo>> {
    return this.http.get<Array<Processo>>(`${this.apiUrl}?search=${search}`)
  }

  save(newProcesso:any):Observable<Processo>{
    return this.http.post<Processo>(this.apiUrl,newProcesso)
  }

  delete(id: number):Observable<Processo>{
    return this.http.delete<Processo>(`${this.apiUrl}/${id}`)
  }
}
