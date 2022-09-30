import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
})
export class FilterTextComponent implements OnInit {
  filterText!: string;

  @Output() filterEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  onKeyUp(): void {
    this.filterEventEmitter.emit(this.filterText);
  }

  constructor() {}

  ngOnInit(): void {}
}
