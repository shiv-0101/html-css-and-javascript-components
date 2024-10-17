const test = document.getElementById('test')

//with .add we can only add a class and not remove on
// next click or action

const change = () =>{
    test.classList.toggle('active')
}

//with toggle we can add and remove class automaticall
//when clicked next

/* const change = () =>{
    test.classList.add('active')
} */ 
