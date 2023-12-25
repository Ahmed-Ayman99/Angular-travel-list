import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  @Input() items: {
    id: number;
    quantity: number;
    description: string;
    packed: boolean;
  }[];

  packedItemsLength: number;
  percentage: number;

  ngOnInit(): void {
    this.calculateFooterValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && changes.items.currentValue) {
      this.calculateFooterValues();
    }
  }

  private calculateFooterValues(): void {
    this.packedItemsLength = this.items.filter((item) => item.packed).length;
    this.percentage = this.items.length
      ? Math.round((this.packedItemsLength / this.items.length) * 100)
      : 0;
  }
}
