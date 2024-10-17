const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.textContent = input.value
    list.appendChild(newItem)
    input.value = ''
})

removeBtn.addEventListener('click', () => {
    const lastItem = list.lastElementChild
    if (lastItem) {
        list.removeChild(lastItem)
    }
})