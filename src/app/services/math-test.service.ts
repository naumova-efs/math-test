import {Injectable} from '@angular/core';

export interface MathTestService {
  getTestTitle(): string;
  getOperationSymbol(): string;
  getOperand1(): number;
  getOperand2(): number;
  getOperationResult(a: number, b: number): number;
}

export class MathUtility {
  public static getRandom2To9(): number {
    return Math.floor(Math.random() * 8) + 2;
  }
}

@Injectable()
export class MultiplicationTestService implements MathTestService {
  getOperationSymbol(): string {
    return "X";
  }

  getOperand1(): number {
    return MathUtility.getRandom2To9();
  }

  getOperand2(): number {
    return MathUtility.getRandom2To9();
  }

  getOperationResult(a: number, b: number): number {
    return a * b;
  }

  getTestTitle(): string {
    return "Проверим, умеешь ли ты умножать.";
  }

}

export class DivisionTestService implements MathTestService {
  operand1: number;
  operand2: number;

  getOperationSymbol(): string {
    return ":";
  }

  getOperand1(): number {
    this.operand1 = this.operand2 * MathUtility.getRandom2To9();
    return this.operand1;

  }


  getOperand2(): number {
    this.operand2 = MathUtility.getRandom2To9();
    return this.operand2;
  }

  getOperationResult(a: number, b: number): number {
    return a / b;
  }

  getTestTitle(): string {
    return "Проверим, умеешь ли ты делить.";
  }


}

