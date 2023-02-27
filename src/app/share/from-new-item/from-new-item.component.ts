import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-from-new-item',
  templateUrl: './from-new-item.component.html',
  styleUrls: ['./from-new-item.component.scss'],
})
export class FromNewItemComponent {
  @Input() label!: string;
  @Input() className: string = 'btn-primary';

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewCity(item: string): void {
    console.log('item->', item);
    this.newItemEvent.emit(item);
  }
}
