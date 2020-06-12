import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, AutoCompleteComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as varible searchResult1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const searchResult1 = fixture.debugElement.componentInstance.searchResult1;
    expect(searchResult1).toEqual([]);
  });

  it('should have as varible searchResult2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const searchResult2 = fixture.debugElement.componentInstance.searchResult2;
    expect(searchResult2).toEqual([]);
  });

  it('should have as varible inputValue1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputValue1 = fixture.debugElement.componentInstance.inputValue1;
    expect(typeof inputValue1).toBe('string');
  });

  it('should have as varible inputValue2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputValue2 = fixture.debugElement.componentInstance.inputValue2;
    expect(typeof inputValue2).toBe('string');
  });

  it('should have function autoCompleteSearch', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const autoCompleteSearch = fixture.debugElement.componentInstance.autoCompleteSearch;
    expect(typeof autoCompleteSearch).toBe('function');
  });

  it('should have function autoCompleteSearch2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const autoCompleteSearch2 = fixture.debugElement.componentInstance.autoCompleteSearch2;
    expect(typeof autoCompleteSearch2).toBe('function');
  });

  it('should have function onValueChange1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const onValueChange1 = fixture.debugElement.componentInstance.onValueChange1;
    expect(typeof onValueChange1).toBe('function');
  });

  it('should have function onValueChange2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const onValueChange2 = fixture.debugElement.componentInstance.onValueChange2;
    expect(typeof onValueChange2).toBe('function');
  });
});
