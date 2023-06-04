{
    let expression = "";
    let mathSymbol = "";


    let handleNumberButtons = (value) => {
        expression += value;
        updateDisplay(expression);
    };

    let handleFunctionButtons = (value) => {
        if (mathSymbol !== "" && expression.slice(-1) !== mathSymbol) {
            updateDisplay();
        }

        if (mathSymbol !== "" && isMathSymbol(expression.slice(-1))) {
            expression = expression.slice(0, -1);

        } else {
            mathSymbol = value;
            expression += mathSymbol;
        }

        updateDisplay(expression);
    };

    let isMathSymbol = (char) => {
        return ['+', '-', '*', '/'].includes(char);
    }

    let handleDecimalButton = () => {
        if (!expression.includes(".")) {
            expression += ".";
        }
        updateDisplay(expression);
    };

    let calculate = () => {
        let result = eval(expression);
        expression = result.toString();
        updateDisplay(expression);
    };

    let clear = () => {
        expression = "";
        mathSymbol = "";
        updateDisplay(expression);
    };

    const remove = () => {
        document.getElementById("result").textContent = expression;
        expression = expression.slice(0, -1);
        updateDisplay(expression)
    };

    const removeButton = document.getElementById("delete");
    removeButton.addEventListener("click", remove);

    let updateDisplay = (value) => {
        document.querySelector(".display").textContent = value;
    };

    const numbers = document.querySelectorAll(".button_number");
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            handleNumberButtons(number.textContent);
        });
    });

    const operations = document.querySelectorAll(".button_function");
    operations.forEach(operation => {
        operation.addEventListener('click', () => {
            handleFunctionButtons(operation.textContent);
        });
    });

    const decimal = document.getElementById("comma");
    decimal.addEventListener("click", handleDecimalButton);

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clear);

    const equalButton = document.getElementById("equal");
    equalButton.addEventListener("click", calculate);

}