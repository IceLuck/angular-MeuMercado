import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiControllerService } from '../api-controller.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-criar-editar-produto',
  templateUrl: './criar-editar-produto.component.html',
  styleUrls: ['./criar-editar-produto.component.css'],
  providers: [ApiControllerService]
})
export class CriarEditarProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  
  public novo: boolean = false;

  constructor(
    private service: ApiControllerService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(id != 'novo') {
        console.log("Entrou if id != novo");
        console.log("id");
        console.log(id);
        this.service.obterProdutoById(id)
          .subscribe(produto => {
            this.produto = produto;
            console.log("retorno");
            console.log(this.produto);            
          });
    } else {
      this.novo = true;
    }
  }

  salvar(produto: Produto) {
    if (produto.id) {
      console.log("Entrou editarProduto");
      this.service.editarProduto(produto);
    } else {
      console.log("Entrou novoProduto");
      this.service.novoProduto(produto);
    }
    this.router.navigate(['/produtos']);
  }
}
