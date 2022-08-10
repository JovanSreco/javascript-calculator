export default class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clearAll();
  }

  clearAll() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.updateDisplay();
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return;
    this.currentOperand += number.toString();
  }

  selectOperation(operation) {
    if (!this.currentOperand && this.previousOperand) {
      this.changeOperation(operation);
      return;
    }
    if (!this.currentOperand) return;

    if (this.previousOperand) {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let result;
    const number1 = parseFloat(this.previousOperand);
    const number2 = parseFloat(this.currentOperand);
    if (isNaN(number1) || isNaN(number2)) return;
    switch (this.operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        return;
    }
    this.currentOperand = result.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  changeOperation(operation) {
    this.operation = operation;
    this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`;
  }

  updateDisplay() {
    this.previousOperandElement.innerText = this.previousOperand;
    if (this.operation)
      this.previousOperandElement.innerText += " " + this.operation.toString();
    this.currentOperandElement.innerText = this.currentOperand;
  }
}
