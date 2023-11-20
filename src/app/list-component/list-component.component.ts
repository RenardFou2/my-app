import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {
  
  @Input() interests: string[] = [];
  @Input() selected: number = -1;
  @Output() selectedChange = new EventEmitter<number>();

  select(which: number): void {
    this.selected = which;
    this.selectedChange.emit(which);
  }
}
