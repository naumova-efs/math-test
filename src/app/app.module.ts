import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ApplicationComponent} from './app.component';
import {ScoreComponent} from './components/score/score.component';
import {MultiplicationTaskComponent, DivisionTaskComponent} from './components/math-task/task.component';
import{MultiplicationTestService, DivisionTestService, MathTestService} from './services/math-test.service'

@NgModule({
  declarations: [
    ApplicationComponent,
    ScoreComponent,
    MultiplicationTaskComponent,
    DivisionTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MultiplicationTestService, DivisionTestService],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
