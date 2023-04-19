{
    const clear = () => {
        document.getElementById("result").value = ""
    }

    const clearButton = document.querySelector(".button_clear");
    clearButton.addEventListener("click", clear);
}