import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private baseEndpoint='http://localhost:8080/product';
  private cabeceras: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
})
  constructor(private http: HttpClient) { }

  public listar(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpoint);
 }

 public ver(sku: number): Observable<Product>{
  return this.http.get<Product>(`${this.baseEndpoint}/${sku}`)
}

public crear(producto: Product): Observable<Product>{
  return this.http.post<Product>(this.baseEndpoint, producto, {headers: this.cabeceras});
}

public editar(producto: Product): Observable<Product>{
  return this.http.put<Product>(`${this.baseEndpoint}/${producto.sku}`, producto, {headers: this.cabeceras});
}

public eliminar(sku: number): Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/${sku}`);
}
}
