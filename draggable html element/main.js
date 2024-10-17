const element = document.querySelector(".draggable-el")
let isDragging = false
let lastX = 0
let lastY = 0

element.addEventListener('mousedown', (event) =>{
    isDragging = true
    lastX = event.clientX
    lastY = event.clientY
    element.style.cursor = "grabbing"
})

element.addEventListener('mousemove', (event) =>{
    if(!isDragging) return

    const deltaX = event.clientX - lastX
    const deltaY = event.clientY - lastY

    const elementX = parseInt(window.getComputedStyle(element).getPropertyValue('left'))
    const elementY = parseInt(window.getComputedStyle(element).getPropertyValue('top'))


    element.style.left = `${elementX + deltaX}px`
    element.style.top = `${elementY + deltaY}px`

    lastX = event.clientX
    lastY = event.clientY
})

//cursor isn't working on next click,, so

document.addEventListener('mouseup', () =>{
    if(isDragging){
        isDragging = false
        element.style.cursor = "grab"
    }
})
