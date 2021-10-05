import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarProdutoComponent } from './criar-editar-produto.component';

describe('CriarEditarProdutoComponent', () => {
  let component: CriarEditarProdutoComponent;
  let fixture: ComponentFixture<CriarEditarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
