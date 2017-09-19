import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {MathTestService, MultiplicationTestService, DivisionTestService} from './services/math-test.service';
import {MultiplicationTaskComponent, MathTaskAbstract} from './components/math-task/task.component'

@Component({
  selector: 'math-test-application',
  //selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {
  @ViewChild('taskComp')
  taskCildComponent: MathTaskAbstract;
  taskSelector: string;
  mathTestOperations: Array<string> = ["Multiplication", "Division"];

  private testTitle: string;


  private numberOfGoodAnswers: number = 0;
  private numberOfBadAnswers: number = 0;
  private numberTotalAnswers: number = 0;
  private startButtonVisibility: string = "visible";
  private taskVisibility: string = "hidden";
  private tasksNumber: string = "2";

  constructor() {
    this.testTitle = "Проверь свое знание и умение";
    this.taskVisibility = "hidden";
    this.startButtonVisibility = "visible";
  }

  startClicked(): void {
    this.numberOfBadAnswers = 0;
    this.numberOfGoodAnswers = 0;
    this.numberTotalAnswers = 0;

    this.startButtonVisibility = "hidden";
    this.taskVisibility = "visible";
    this.taskCildComponent.createAndDisplayNextTask();
  }

  onTaskNumberInput(event: Event) {
    let inputElement = <HTMLInputElement>event.target;
    this.tasksNumber = inputElement.value;
    console.log("number of tasks in test " + this.tasksNumber);
  }

  testFinished() {
    this.taskVisibility = "hidden";
    this.startButtonVisibility = "visible";

  }

  badAnswerHandler(event: CustomEvent) {
    this.numberOfBadAnswers++;
    this.numberTotalAnswers++;
  }

  goodAnswerHandler(event: CustomEvent) {
    this.numberTotalAnswers++;
    this.numberOfGoodAnswers++;
    if (this.numberTotalAnswers >= Number(this.tasksNumber)) {
      this.testFinished();
    }
  }

  ngOnInit() {
    this.taskSelector = "Multiplication";
  }

  onSelectionChange(taskOperationName: string) {
    this.taskSelector = taskOperationName;
  }
}
