import { Component } from '@angular/core';

import { AutoCompleteService } from './auto-complete/auto-compelete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AutoCompleteService]
})
export class AppComponent {
  title = 'Autocomplete';
  searchResult: string[] = [];
  searchResult2: string[] = [];

  inputValue1: string;
  inputValue2: string;

  constructor(private autoCompleteService: AutoCompleteService) {}

  autoCompleteSearch($event: string) {
    // mock list data
    if ($event) {
      this.searchResult = [
        $event + Date.now().toString().substr(-2),
        $event + Date.now().toString().substr(-3),
        $event + Date.now().toString().substr(-4)
      ];
    } else {
      this.searchResult = [];
    }
  }

  autoCompleteSearch2($event: string) {
    // mock list data
    if ($event) {
      this.searchResult2 = [$event.repeat(1), $event.repeat(2), $event.repeat(3)];
    } else {
      this.searchResult2 = [];
    }
  }

  onValueChange1(value: string) {
    this.inputValue1 = value;
  }

  onValueChange2(value: string) {
    this.inputValue2 = value;
  }
}
