import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta } from '../model/consulta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private url: string = 'http://localhost:9999/api/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient
  ) { }

  public getListarConsultasAbogados(): Observable<Consulta[]> {
    return this.http.get(this.url + 'consulta/abogado').pipe(
      map(response => response as Consulta[])
    );
  }

  public getConsultaAbogado(id): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.url}/consulta/abogado/${id}`);
  }
}
