const container = document.getElementById ('container')
const colors = ["#2ecc71", "#8e44ad", "#3498db", "#e74c3c", "#e67e22"]

for (let i=0; i<400; i++){
    const square= document.createElement("div")
    square.classList.add ("square")

    square.addEventListener("mouseover", () =>{
        
        square.style.background = colors[Math.floor(Math.random ()*colors.length)]
        square.style.boxShadow= "0 0 2px #000, 0 0 10px #000"
    })

    square.addEventListener("mouseout", ()=>{
        
        square.style.background= '#1d1d1d'
        square.style.boxShadow= 'none'
    })

    container.appendChild(square)
}