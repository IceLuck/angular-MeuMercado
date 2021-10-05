import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

    constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }    

    obterProdutos(): Observable<Produto[]>{
        const url = `${environment.appApiUrl}/GetProdutos`;
        return this.http.get<Produto[]>(url)
          .pipe(
            retry(2),
            catchError(this.handleError));
    }

    obterProdutoById(id: number): Observable<Produto> {
      const url = `${environment.appApiUrl}/GetProdutoById?produtoId=${id}`;
      //return this.http.get<Produto>(url);
      return this.http.get<Produto>(url)
      .pipe(
        retry(2),
        catchError(this.handleError));      
    }
  
    novoProduto(produto: Produto) {
      const url = `${environment.appApiUrl}/CreateProduto/`;
      this.http.post<Produto>(url, produto).subscribe();
    }
  
    editarProduto(produto: Produto){
      const url = `${environment.appApiUrl}/UpdateProduto/`;
      this.http.put<Produto>(url, produto).subscribe();
    }
  
    deleteProduto(id: number) {      
      const url = `${environment.appApiUrl}/DeleteProduto?produtoId=${id}`;
      this.http.put<Produto>(url,id).subscribe();
      //return this.http.get<Produto>(url);
    }    

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };    

}
