
function password_length(event) {
    const bar = document.querySelector('.pass-length');
    
    var length = event.target.value.length;
    bar.className = ""
    
    if (length < 5){
        bar.classList.add('bad');
    } else if (length >= 5 && length < 10){
        bar.classList.add('good');
    } else if (length >= 10){
        bar.classList.add('excellent');
    }
}

