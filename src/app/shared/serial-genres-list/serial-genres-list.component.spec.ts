/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerialGenresListComponent } from './serial-genres-list.component';

describe('SerialGenresListComponent', () => {
  let component: SerialGenresListComponent;
  let fixture: ComponentFixture<SerialGenresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialGenresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialGenresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
