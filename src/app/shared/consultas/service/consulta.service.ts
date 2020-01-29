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
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient
  ) { }

  public getListarConsultasAbogados(): Observable<Consulta[]> {
    return this.http.get(`${environment.url}consulta/abogado`).pipe(
      map(response => response as Consulta[])
    );
  }

  public getConsultaAbogado(id): Observable<Consulta> {
    return this.http.get<Consulta>(`${environment.url}consulta/abogado/${id}`);
  }

  public postCrearConsultaAbogado(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(`${environment.url}comando/abogado`, consulta, { headers: this.httpHeaders });
  }

  public putCrearConsultaAbogado(consulta: Consulta): Observable<Consulta> {
    return this.http.put<Consulta>(`${environment.url}comando/abogado`, consulta, { headers: this.httpHeaders });
  }
}
