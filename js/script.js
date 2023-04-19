{
  const clear = () => {
    document.getElementById("result").textContent = "0"
  }

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clear);
}