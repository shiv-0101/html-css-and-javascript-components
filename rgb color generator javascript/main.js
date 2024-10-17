const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const colorBox = document.getElementById("color-box")
const colorCode = document.getElementById("color-code")
const copyButton = document.getElementById("copy-button")

red.addEventListener('input', updateColor)
green.addEventListener('input', updateColor)
blue.addEventListener('input', updateColor)

function updateColor(){
    colorBox.style.backgroundColor= `rgb(${red.value}, ${green.value}, ${blue.value})`
    colorCode.innerHTML= `Color code: rgb(${red.value}, ${green.value}, ${blue.value}) `
}

copyButton.addEventListener("click", copyColorCode)
function copyColorCode(){
    const textArea = document.createElement("textarea")
    textArea.value = colorCode.textContent.substring(12)
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
}