{
    const clear = () => {
        document.getElementById("result").value = "0"
    }

    const clearButton = document.querySelector(".button_clear");
    clearButton.addEventListener("click", clear);
}