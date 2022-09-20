import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pessoa } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:8080/api/pessoa'
  
  constructor(private http: HttpClient) { }

  public getAll(search: string = ''): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(`${this.apiUrl}?search=${search}`)
  }

  save(newPessoa:any):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiUrl,newPessoa)
  }

  delete(id: number):Observable<Pessoa>{
    return this.http.delete<Pessoa>(`${this.apiUrl}/${id}`)
  }
}
