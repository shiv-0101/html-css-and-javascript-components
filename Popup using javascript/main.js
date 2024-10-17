const popup = document.querySelector('#popup')
const openPopup = document.querySelector('.open-btn')
const closePopup = document.querySelector('.close-btn')

openPopup.addEventListener("click", ()=>{
    popup.showModal()
})

closePopup.addEventListener("click", ()=>{
    popup.close()
})