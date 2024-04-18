import { Item } from './../../interfaces/iItem';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnChanges(): void {
    console.log('onChanges')
  }

  ngOnInit(): void {
    console.log('onInit')
   }

}
