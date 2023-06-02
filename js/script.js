/*{
  let expression = "";
  let mathSymbol = "";
  const clear = () => {
    document.getElementById("result").textContent = "0"
    expression = "";
  };

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clear);

  const remove = () => {
    document.getElementById("result").textContent = expression;
    expression = expression.slice(0, -1);
    updateDisplay(expression)
  };

  const removeButton = document.getElementById("delete");
  removeButton.addEventListener("click", remove);


  handleNumberButtons = (value) => {
    expression += value;
    updateDisplay(expression);
  };

  handleFunctionButtons = (value) => {
    mathSymbol += `${value}`;
    expression = expression + mathSymbol;
    updateDisplay(expression);
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
    if (equation.includes(",")) {
      let numEquation = equation.replace(",", ".");
      let outcome = eval(parseFloat(numEquation));
      document.getElementById("result").textContent = outcome;
      expression = "";
      console.log(outcome);
    }
    else {
      let outcome = eval(equation);
      document.getElementById("result").textContent = outcome;
      expression = "";
      console.log(outcome);
    }

  };
  const equalButton = document.getElementById("equal");
  equalButton.addEventListener("click", solve);

}
/*
1. Trzeba utworzyć zmienną, która będzie przechowywała wyrażenie i będzie zamieniać operatory matematyczne w przypadku naciśnięcia kilka razy przycisków z operatorem.
2. Nie ma obsługi ułamków - liczby wpisane po przecinku traktuje jako całkowite.
3. (OPCJONALNIE - Domyślnie najlepiej) Dodać obsługę klawiwatury. 

Pomysł:
Wyrażenie zrobić jako tablicę i na kolejne kliknięcia dodawać do niej kolejne liczby, które by były konwertowane z łancucha znaków na liczbę i musiałyby się kończyć w chwili naciśnięcia klawisza z operatorem matematycznym */