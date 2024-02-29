function calculateAbsolute(e) {
    e.preventDefault()
    let inputElement = document.querySelector("#numInput");

    let num = parseFloat(inputElement.value);

    let absoluteValue = Math.abs(num);

    let resultElement = document.getElementById("result");
    resultElement.textContent = "Daxil edilən sayının mutlak dəyəri: " + absoluteValue;
}
