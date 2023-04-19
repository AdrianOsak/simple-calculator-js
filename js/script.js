{
  const clear = () => {
    document.getElementById("result").textContent = "0"
  }

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clear);

  let expression = "";

  handleNumberButtons = (value) => {
    expression += value;
    updateDisplay(expression);
  };

  handleFunctionButtons = (value) => {
    expression += ` ${value} `;
    updateDisplay(expression);
    console.log(expression);
  };

  updateDisplay = (expression) => {
    const display = document.getElementById("result");
    display.textContent = expression;
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

  const solve = () => {
    let equation = document.getElementById("result").textContent;
    let outcome = eval(equation);

    document.getElementById("result").textContent = outcome;
  }
  const equalButton = document.getElementById("equal");
  equalButton.addEventListener("click", solve);

}
/*
1. Trzeba utworzyć zmienną, która będzie przechowywała wyrażenie i będzie zamieniać operatory matematyczne w przypadku naciśnięcia kilka razy przycisków z operatorem.
2. Trzeba sprawić by po każdym kliknięciu liczby, przycisku C lub = wyrażenie było resetowane i przyjmowało wartość 0.*/