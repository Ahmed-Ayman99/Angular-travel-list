import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output() onDeleteItem = new EventEmitter<number>();
  @Output() onToggleItem = new EventEmitter<number>();
  @Output() onClearList = new EventEmitter();

  @Input() items: {
    id: number;
    quantity: number;
    description: string;
    packed: boolean;
  }[];

  deleteItem(id: number) {
    this.onDeleteItem.emit(id);
  }

  toggleItem(id: number) {
    this.onToggleItem.emit(id);
  }

  clearList() {
    this.onClearList.emit();
  }
}
