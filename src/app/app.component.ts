import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items: {
    id: number;
    quantity: number;
    description: string;
    packed: boolean;
  }[] = [];

  ngOnInit(): void {
    const items: null | string = localStorage.getItem('items');
    this.items = items ? JSON.parse(items) : [];
  }

  addItem(newItem: { quantity: number; description: string }) {
    if (!newItem.description || !newItem.description) return;

    this.items.push({
      ...newItem,
      id: Math.random(),
      packed: false,
    });

    this.saveToLocalStorage();
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.saveToLocalStorage();
  }

  clearList() {
    this.items = [];
    this.saveToLocalStorage();
  }

  toggleItem = (id: number) => {
    this.items = this.items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );

    this.saveToLocalStorage();
  };

  saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
