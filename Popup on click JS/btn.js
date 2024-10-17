let bttn = document.querySelector(".btn")
let reply = document.querySelector(".text")

bttn.addEventListener('click', removeBtn)
function removeBtn(){
    bttn.classList.add('removed')
    reply.innerHTML="Congrats!!🙌 You opted to learn..😍"
}


