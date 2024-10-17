document.getElementById("input").addEventListener("keyup", function(event) {
    if (KeyboardEvent.keyCode === 13) {
      checkPal()
    }
  })

function checkPal(){
    let str = document.getElementById("input").value
    let strLength =str.length
    let isPlaindrome = true

    for (let i = 0; i < strLength/2; i++) {
        if (str[i] !== str[strLength - i - 1]) {
            isPlaindrome = false
            break
        }
    }
    let result = document.getElementById("result")
    if (isPlaindrome){
        result.innerHTML = "Yes, 👍 Sentence is Plaindrome"
    } else{
        result.innerHTML = "No, ❌ Sentence not is Plaindrome"
    }
}
