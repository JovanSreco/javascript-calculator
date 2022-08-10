"use strict";
import Calculator from "./calculator.js";

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-all-clear]");
const delBtn = document.querySelector("[data-delete]");
const previousOperandElement = document.querySelector("[data-previous-operand]");
const currentOperandElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Number addition to display
numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.dataset.number);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.selectOperation(operation.dataset.operation);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearBtn.addEventListener("click", () => {
  calculator.clearAll();
  calculator.updateDisplay();
});

delBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
