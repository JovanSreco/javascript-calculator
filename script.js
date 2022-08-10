class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
        this.updateDisplay()
    }

    appendNumber(number) {
        if(this.currentOperand.includes(".") && number === ".") return;
        this.currentOperand += number.toString()
        this.updateDisplay()
    }

    selectOperation(operation) {
        if(!this.currentOperand) return
        if(this.previousOperand) {
            this.calculate()
        }
        this.operation = operation
        this.previousOperand = `${this.currentOperand} ${operation}`
        this.currentOperand = ""
    }

    calculate() {

    }

    updateDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberBtns = document.querySelectorAll("[data-number]")
const operationBtns = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const allClearBtn = document.querySelector("[data-all-clear]")
const delBtn = document.querySelector("[data-delete]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// Number addition to display
numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.dataset.number)
        calculator.updateDisplay()
    })
})

operationBtns.forEach(operation => {
    operation.addEventListener("click", () => {
        calculator.selectOperation(operation.dataset.operation)
        calculator.updateDisplay()
    })
})


delBtn.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})
// Number addition to display
// Dot problem