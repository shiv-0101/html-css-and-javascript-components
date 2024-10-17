const html = document.querySelector('html')
const checked = document.querySelector('#check')

checked.addEventListener('change',
function(){
    html.classList.toggle('darkmode')
})