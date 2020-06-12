import { Injectable } from '@angular/core';

@Injectable()
export class AutoCompleteService {
  input: string;
  constructor() {}
  setInputValue(value: string) {
    this.input = value;
  }

  getInputValue() {
    return this.input;
  }
}
