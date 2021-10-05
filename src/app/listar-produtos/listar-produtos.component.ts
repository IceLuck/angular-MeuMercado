import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiControllerService } from '../api-controller.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
  providers: [ApiControllerService]
})
export class ListarProdutosComponent implements OnInit {

  public produtos!: Produto[];

  constructor(
    private router: Router,
    private service: ApiControllerService
  ) { }

  ngOnInit(): void {
    this.service.obterProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
      });
  }

  editarProduto(produto: Produto){
    this.router.navigate(['/produtos', produto.id]);
  }

  novoProduto(){
    this.router.navigate(['/produtos/novo']);
  }

  deletarProduto(produto: Produto){
    this.service.deleteProduto(produto.id);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/produtoss']);
    });
  }
}
