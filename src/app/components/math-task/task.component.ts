import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MultiplicationTestService, DivisionTestService, MathTestService} from '../../services/math-test.service';

export abstract class MathTaskAbstract {
  @Output() badAnswer: EventEmitter<any> = new EventEmitter();
  @Output() goodAnswer: EventEmitter<any> = new EventEmitter();

  private operand1: number;
  private operand2: number;
  private inputResult: string = "";
  private operationSymbol: string;

  private instructionText: string = "";
  private instructionClass: string = "text-primary";
  private isTmeForNextTask: boolean = false;
  private resultFontColour: string = "grey";

  constructor(protected mathTestService: MathTestService) {
    this.operationSymbol = this.mathTestService.getOperationSymbol();
  }

  public onResultEnter(result: string): void {
    if (!this.isTmeForNextTask) {
      this.inputResult = result;
      let isCorrect: boolean = Number(this.inputResult) == this.mathTestService.getOperationResult(this.operand1, this.operand2);
      this.instructionText = isCorrect ? "Отлично! Жми Ввод для продолжения" : "Ошибка! Исправляй!";
      this.instructionClass = isCorrect ? "text-success" : "text-danger";
      if (isCorrect) {
        this.goodAnswer.emit();
        this.isTmeForNextTask = true;
      } else {
        this.badAnswer.emit();
        this.isTmeForNextTask = false;
      }
    } else {
      this.createAndDisplayNextTask();
    }
  }

  public createAndDisplayNextTask(): void {
    this.operand2 = this.mathTestService.getOperand2();
    this.operand1 = this.mathTestService.getOperand1();
    this.isTmeForNextTask = false;
    this.instructionText = "Печатай результат и жми Enter";
    this.instructionClass = 'text-primary';
    this.inputResult = '';
  }
}

@Component({
  selector: 'math-task-multiply',
  templateUrl: './task.component.html',
  styleUrls: ['../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MultiplicationTaskComponent extends MathTaskAbstract implements OnInit {

  constructor(multiplicationTestService: MultiplicationTestService) {
    super(multiplicationTestService);
  }

  ngOnInit() {
    this.createAndDisplayNextTask();
  }
}


@Component({
  selector: 'math-task-divide',
  templateUrl: './task.component.html',
  styleUrls: ['../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DivisionTaskComponent extends MathTaskAbstract implements OnInit {

  constructor(divisionTaskSrv: DivisionTestService) {
    super(divisionTaskSrv);
  }

  ngOnInit() {
    this.createAndDisplayNextTask();
  }

}


