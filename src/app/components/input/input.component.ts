import { Item } from './../../interfaces/iItem';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = "Salvar item";
  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = "Editar item";
    }
  }

  editarItem(){
    this.listaService.editarItemLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo;
    this.editando = false;
    this.textoBtn = "Salvar lista"
  }

  adicionarItem(){
    this.listaService.adicionarItemLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }
}
