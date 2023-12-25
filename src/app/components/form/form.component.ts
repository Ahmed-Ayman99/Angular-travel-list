import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() addItem = new EventEmitter<{
    quantity: number;
    description: string;
  }>();

  quantity: number = 1;
  description: string;
  selectionLength = Array.from({ length: 20 });

  clickBtn() {
    this.addItem.emit({
      quantity: +this.quantity,
      description: this.description,
    });

    this.quantity = 1;
    this.description = '';
  }
}
