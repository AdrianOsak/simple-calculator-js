{
    const clear = () => {
        document.getElementById("result").value = ""
    }

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clear);
}