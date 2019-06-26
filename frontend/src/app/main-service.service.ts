import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private url = "http://localhost:8080";
  constructor( private http: HttpClient ) { }

  public obtenerOperacion(valor1: number, valor2: number, tipoOperacion): Observable<any>{
    return this.http.get(this.url + '/operacion?a='+valor1+'&b='+valor2+'&tipoOperacion='+tipoOperacion, httpOptions);
  }
}


