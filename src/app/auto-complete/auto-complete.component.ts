import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import throttle from 'lodash/throttle';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('input', { static: true }) input: ElementRef<any>;

  @Input('searchResult') searchResult: string[];

  @Output('handleSearch') handleSearch = new EventEmitter();
  @Output('valueChange') valueChange = new EventEmitter();
  // @Output('value') value: string = '';

  fading: boolean = false;
  value: string;

  throttleChange: () => void;

  constructor() {
    this.throttleChange = throttle(
      () => {
        this.handleSearch.emit(this.value);
        this.valueChange.emit(this.value);
      },
      500,
      { trailing: true }
    );
  }

  onChange($event: any) {
    this.value = $event.target.value;
    this.throttleChange();
  }

  onBlur() {
    this.clearResult();
  }

  onFocus() {
    this.handleSearch.emit(this.value);
  }

  selectItem(item: string) {
    this.value = item;
    this.valueChange.emit(item);
    this.input.nativeElement.value = item;
    this.clearResult();
  }

  clearResult() {
    this.fading = true;
    setTimeout(() => {
      this.searchResult = [];
      this.fading = false;
    }, 300);
  }

  ngOnInit() {}
}
