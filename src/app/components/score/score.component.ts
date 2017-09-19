import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html'

})
export class ScoreComponent implements OnInit {
  @Input() numberGoodAnswers: number;
  @Input() numberBadAnswers: number;
  @Input() scoreComment: string;

  constructor() {
  }

  ngOnInit() {
  }

}
