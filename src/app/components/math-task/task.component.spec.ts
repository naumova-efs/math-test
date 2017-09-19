/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MultiplicationTaskComponent} from './task.component';

describe('TaskComponent', () => {
  let component: MultiplicationTaskComponent;
  let fixture: ComponentFixture<MultiplicationTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicationTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
