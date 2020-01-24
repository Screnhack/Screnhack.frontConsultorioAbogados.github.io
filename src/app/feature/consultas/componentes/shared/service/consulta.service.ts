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

  public getListarConsultasAbogados() {
    return this.doGet<Consulta[]>('http://localhost:9999/api/consulta/abogado');
  }

  protected doGet<T>(serviceUrl: string): Observable<T> {
    return this.http.get(serviceUrl).pipe(
      map(response => response as T )
    );
}
}
