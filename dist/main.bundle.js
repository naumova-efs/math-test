webpackJsonp([1, 4], {

  /***/ 217: /***/ (function (module, exports) {

    module.exports = "body{\n  padding-top: 70px;\n}\n.test-part{\n  margin:20px 0;\n}\n.test-font{\n  font-size:400%;\n}\n.visible{\n  visibility:visible;\n}\n.hidden{\n  visibility:hidden;\n}\n"

    /***/
  }),

  /***/ 301: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
    var core_1 = __webpack_require__(0);
    var math_test_service_1 = __webpack_require__(302);
    var MathTaskAbstract = (function () {
      function MathTaskAbstract(mathTestService) {
        this.mathTestService = mathTestService;
        this.badAnswer = new core_1.EventEmitter();
        this.goodAnswer = new core_1.EventEmitter();
        this.inputResult = "";
        this.instructionText = "";
        this.instructionClass = "text-primary";
        this.isTmeForNextTask = false;
        this.resultFontColour = "grey";
        this.operationSymbol = this.mathTestService.getOperationSymbol();
      }

      MathTaskAbstract.prototype.onResultEnter = function (result) {
        if (!this.isTmeForNextTask) {
          this.inputResult = result;
          var isCorrect = Number(this.inputResult) == this.mathTestService.getOperationResult(this.operand1, this.operand2);
          this.instructionText = isCorrect ? "Отлично! Жми Ввод для продолжения" : "Ошибка! Исправляй!";
          this.instructionClass = isCorrect ? "text-success" : "text-danger";
          if (isCorrect) {
            this.goodAnswer.emit();
            this.isTmeForNextTask = true;
          }
          else {
            this.badAnswer.emit();
            this.isTmeForNextTask = false;
          }
        }
        else {
          this.createAndDisplayNextTask();
        }
      };
      MathTaskAbstract.prototype.createAndDisplayNextTask = function () {
        this.operand2 = this.mathTestService.getOperand2();
        this.operand1 = this.mathTestService.getOperand1();
        this.isTmeForNextTask = false;
        this.instructionText = "Печатай результат и жми Enter";
        this.instructionClass = 'text-primary';
        this.inputResult = '';
      };
      __decorate([
        core_1.Output(),
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
      ], MathTaskAbstract.prototype, "badAnswer", void 0);
      __decorate([
        core_1.Output(),
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
      ], MathTaskAbstract.prototype, "goodAnswer", void 0);
      return MathTaskAbstract;
      var _a, _b;
    }());
    exports.MathTaskAbstract = MathTaskAbstract;
    var MultiplicationTaskComponent = (function (_super) {
      __extends(MultiplicationTaskComponent, _super);
      function MultiplicationTaskComponent(multiplicationTestService) {
        _super.call(this, multiplicationTestService);
      }

      MultiplicationTaskComponent.prototype.ngOnInit = function () {
        this.createAndDisplayNextTask();
      };
      MultiplicationTaskComponent = __decorate([
        core_1.Component({
          selector: 'math-task-multiply',
          template: __webpack_require__(340),
          styles: [__webpack_require__(217)],
          encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof math_test_service_1.MultiplicationTestService !== 'undefined' && math_test_service_1.MultiplicationTestService) === 'function' && _a) || Object])
      ], MultiplicationTaskComponent);
      return MultiplicationTaskComponent;
      var _a;
    }(MathTaskAbstract));
    exports.MultiplicationTaskComponent = MultiplicationTaskComponent;
    var DivisionTaskComponent = (function (_super) {
      __extends(DivisionTaskComponent, _super);
      function DivisionTaskComponent(divisionTaskSrv) {
        _super.call(this, divisionTaskSrv);
      }

      DivisionTaskComponent.prototype.ngOnInit = function () {
        this.createAndDisplayNextTask();
      };
      DivisionTaskComponent = __decorate([
        core_1.Component({
          selector: 'math-task-divide',
          template: __webpack_require__(340),
          styles: [__webpack_require__(217)],
          encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof math_test_service_1.DivisionTestService !== 'undefined' && math_test_service_1.DivisionTestService) === 'function' && _a) || Object])
      ], DivisionTaskComponent);
      return DivisionTaskComponent;
      var _a;
    }(MathTaskAbstract));
    exports.DivisionTaskComponent = DivisionTaskComponent;
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/task.component.js.map

    /***/
  }),

  /***/ 302: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
    var core_1 = __webpack_require__(0);
    var MathUtility = (function () {
      function MathUtility() {
      }

      MathUtility.getRandom2To9 = function () {
        return Math.floor(Math.random() * 8) + 2;
      };
      return MathUtility;
    }());
    exports.MathUtility = MathUtility;
    var MultiplicationTestService = (function () {
      function MultiplicationTestService() {
      }

      MultiplicationTestService.prototype.getOperationSymbol = function () {
        return "X";
      };
      MultiplicationTestService.prototype.getOperand1 = function () {
        return MathUtility.getRandom2To9();
      };
      MultiplicationTestService.prototype.getOperand2 = function () {
        return MathUtility.getRandom2To9();
      };
      MultiplicationTestService.prototype.getOperationResult = function (a, b) {
        return a * b;
      };
      MultiplicationTestService.prototype.getTestTitle = function () {
        return "Проверим, умеешь ли ты умножать.";
      };
      MultiplicationTestService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
      ], MultiplicationTestService);
      return MultiplicationTestService;
    }());
    exports.MultiplicationTestService = MultiplicationTestService;
    var DivisionTestService = (function () {
      function DivisionTestService() {
      }

      DivisionTestService.prototype.getOperationSymbol = function () {
        return ":";
      };
      DivisionTestService.prototype.getOperand1 = function () {
        this.operand1 = this.operand2 * MathUtility.getRandom2To9();
        return this.operand1;
      };
      DivisionTestService.prototype.getOperand2 = function () {
        this.operand2 = MathUtility.getRandom2To9();
        return this.operand2;
      };
      DivisionTestService.prototype.getOperationResult = function (a, b) {
        return a / b;
      };
      DivisionTestService.prototype.getTestTitle = function () {
        return "Проверим, умеешь ли ты делить.";
      };
      return DivisionTestService;
    }());
    exports.DivisionTestService = DivisionTestService;
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/math-test.service.js.map

    /***/
  }),

  /***/ 340: /***/ (function (module, exports) {

    module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 test-font test-part\">\n    <span>{{operand1}}</span>\n    <span>{{operationSymbol}}</span>\n    <span>{{operand2}}</span>\n    <span>=</span>\n    <input #res type=\"text\" id=\"result\" size=\"3\" [value]=\"inputResult\" (keyup.enter)=\"onResultEnter(res.value)\">\n  </div>\n  <div class=\"col-md-12\">\n    <span [class]=\"instructionClass\">{{instructionText}}</span>\n  </div>\n\n</div>\n"

    /***/
  }),

  /***/ 346: /***/ (function (module, exports) {

    function webpackEmptyContext(req) {
      throw new Error("Cannot find module '" + req + "'.");
    }

    webpackEmptyContext.keys = function () {
      return [];
    };
    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = 346;


    /***/
  }),

  /***/ 347: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var platform_browser_dynamic_1 = __webpack_require__(435);
    var app_module_1 = __webpack_require__(456);
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/main.js.map

    /***/
  }),

  /***/ 455: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
    var core_1 = __webpack_require__(0);
    var task_component_1 = __webpack_require__(301);
    var ApplicationComponent = (function () {
      function ApplicationComponent() {
        this.mathTestOperations = ["Multiplication", "Division"];
        this.numberOfGoodAnswers = 0;
        this.numberOfBadAnswers = 0;
        this.numberTotalAnswers = 0;
        this.startButtonVisibility = "visible";
        this.taskVisibility = "hidden";
        this.tasksNumber = "2";
        this.testTitle = "Проверь свое знание и умение";
        this.taskVisibility = "hidden";
        this.startButtonVisibility = "visible";
      }

      ApplicationComponent.prototype.startClicked = function () {
        this.numberOfBadAnswers = 0;
        this.numberOfGoodAnswers = 0;
        this.numberTotalAnswers = 0;
        this.startButtonVisibility = "hidden";
        this.taskVisibility = "visible";
        this.taskCildComponent.createAndDisplayNextTask();
      };
      ApplicationComponent.prototype.onTaskNumberInput = function (event) {
        var inputElement = event.target;
        this.tasksNumber = inputElement.value;
        console.log("number of tasks in test " + this.tasksNumber);
      };
      ApplicationComponent.prototype.testFinished = function () {
        this.taskVisibility = "hidden";
        this.startButtonVisibility = "visible";
      };
      ApplicationComponent.prototype.badAnswerHandler = function (event) {
        this.numberOfBadAnswers++;
        this.numberTotalAnswers++;
      };
      ApplicationComponent.prototype.goodAnswerHandler = function (event) {
        this.numberTotalAnswers++;
        this.numberOfGoodAnswers++;
        if (this.numberTotalAnswers >= Number(this.tasksNumber)) {
          this.testFinished();
        }
      };
      ApplicationComponent.prototype.ngOnInit = function () {
        this.taskSelector = "Multiplication";
      };
      ApplicationComponent.prototype.onSelectionChange = function (taskOperationName) {
        this.taskSelector = taskOperationName;
      };
      __decorate([
        core_1.ViewChild('taskComp'),
        __metadata('design:type', (typeof (_a = typeof task_component_1.MathTaskAbstract !== 'undefined' && task_component_1.MathTaskAbstract) === 'function' && _a) || Object)
      ], ApplicationComponent.prototype, "taskCildComponent", void 0);
      ApplicationComponent = __decorate([
        core_1.Component({
          selector: 'math-test-application',
          //selector: 'app-root',
          template: __webpack_require__(612),
          styles: [__webpack_require__(217), __webpack_require__(611)],
          encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata('design:paramtypes', [])
      ], ApplicationComponent);
      return ApplicationComponent;
      var _a;
    }());
    exports.ApplicationComponent = ApplicationComponent;
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/app.component.js.map

    /***/
  }),

  /***/ 456: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
    var platform_browser_1 = __webpack_require__(191);
    var core_1 = __webpack_require__(0);
    var forms_1 = __webpack_require__(425);
    var http_1 = __webpack_require__(431);
    var app_component_1 = __webpack_require__(455);
    var score_component_1 = __webpack_require__(457);
    var task_component_1 = __webpack_require__(301);
    var math_test_service_1 = __webpack_require__(302);
    var AppModule = (function () {
      function AppModule() {
      }

      AppModule = __decorate([
        core_1.NgModule({
          declarations: [
            app_component_1.ApplicationComponent,
            score_component_1.ScoreComponent,
            task_component_1.MultiplicationTaskComponent,
            task_component_1.DivisionTaskComponent
          ],
          imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
          ],
          providers: [math_test_service_1.MultiplicationTestService, math_test_service_1.DivisionTestService],
          bootstrap: [app_component_1.ApplicationComponent]
        }),
        __metadata('design:paramtypes', [])
      ], AppModule);
      return AppModule;
    }());
    exports.AppModule = AppModule;
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/app.module.js.map

    /***/
  }),

  /***/ 457: /***/ (function (module, exports, __webpack_require__) {

    "use strict";

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
    var core_1 = __webpack_require__(0);
    var ScoreComponent = (function () {
      function ScoreComponent() {
      }

      ScoreComponent.prototype.ngOnInit = function () {
      };
      __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
      ], ScoreComponent.prototype, "numberGoodAnswers", void 0);
      __decorate([
        core_1.Input(),
        __metadata('design:type', Number)
      ], ScoreComponent.prototype, "numberBadAnswers", void 0);
      __decorate([
        core_1.Input(),
        __metadata('design:type', String)
      ], ScoreComponent.prototype, "scoreComment", void 0);
      ScoreComponent = __decorate([
        core_1.Component({
          selector: 'score',
          template: __webpack_require__(613)
        }),
        __metadata('design:paramtypes', [])
      ], ScoreComponent);
      return ScoreComponent;
    }());
    exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=/Users/lena/WebstormProjects/math-test/src/score.component.js.map

    /***/
  }),

  /***/ 612: /***/ (function (module, exports) {

    module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"text-left\">\n        <h3>{{testTitle}}</h3>\n      </div>\n\n      <table>\n        <tbody>\n          <tr *ngFor=\"let operationName of mathTestOperations; let idc= index\">\n            <td>{{operationName}}</td>\n            <td>\n              <input type=\"radio\" name=\"radiogroup\"\n              [checked]=\"idx===0\"\n              [value]=\"operationName\"\n              (change)=\"onSelectionChange(operationName)\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <br>\n\n      <div class=\"text-left\">\n        <span>Количество примеров в тесте:</span>\n        <input type=\"text\" [value]=\"tasksNumber\" (input)=\"onTaskNumberInput($event)\">\n        <span [class]=\"startButtonVisibility\">\n          <button type=\"btn btn-primary btn-md\" (click)=\"startClicked()\" >\n            Начать тест\n          </button>\n        </span>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\" [ngSwitch]=\"this.taskSelector\">\n    <math-task-multiply #taskComp *ngSwitchCase=\"'Multiplication'\"\n                        [class]=\"taskVisibility\"\n                        (badAnswer)=\"badAnswerHandler($event)\"\n                        (goodAnswer)=\"goodAnswerHandler($event)\">\n\n    </math-task-multiply>\n    <math-task-divide #taskComp *ngSwitchCase=\"'Division'\"\n                        [class]=\"taskVisibility\"\n                        (badAnswer)=\"badAnswerHandler($event)\"\n                        (goodAnswer)=\"goodAnswerHandler($event)\">\n\n    </math-task-divide>\n  </div>\n\n  <div class=\"row\" [class]=\"resultVisibility\">\n    <score [numberBadAnswers]=\"numberOfBadAnswers\"\n           [numberGoodAnswers]=\"numberOfGoodAnswers\" [scoreComment]=\"resultCommentText\">\n    </score>\n  </div>\n\n</div>\n"

    /***/
  }),

  /***/ 613: /***/ (function (module, exports) {

    module.exports = "<div>\n  <strong>\n    <span class=\"text-success\">Верно:{{numberGoodAnswers}}</span>\n    <span class=\"text-danger\">Ошибок:{{numberBadAnswers}}</span>\n  </strong>\n  <br>\n  {{scoreComment}}\n</div>\n"

    /***/
  }),

  /***/ 626: /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(347);


    /***/
  })

}, [626]);
//# sourceMappingURL=main.bundle.map
