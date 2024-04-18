import { Item } from './../../interfaces/iItem';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Output() emitindoParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnChanges(): void { }

  ngOnInit(): void { }

  editarItem(){
    this.emitindoParaEditar.emit(this.item);
  }

  deletarItem(){
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

}
