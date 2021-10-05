import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CriarEditarProdutoComponent } from './criar-editar-produto/criar-editar-produto.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'produtos', component: ListarProdutosComponent }, 
  { path: 'produtos/:id', component: CriarEditarProdutoComponent },     
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },  
  { path: '**', component: PaginaNaoEncontradaComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
