import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { AutoCompleteComponent } from './auto-complete.component';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have varible fading', () => {
    const fixture = TestBed.createComponent(AutoCompleteComponent);
    const fading = fixture.debugElement.componentInstance.fading;
    expect(fading).toEqual(false);
  });

  it('should have varible value', () => {
    const fixture = TestBed.createComponent(AutoCompleteComponent);
    const value = fixture.debugElement.componentInstance.value;
    expect(typeof value).toBe('string');
  });
});
