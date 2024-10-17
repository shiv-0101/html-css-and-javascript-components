var quotes = [
    {
        quote: "This too shall pass.",
        source: "A good guy"
    },
    {
        quote: "Life's too misterious to take soo serious.",
        source: "Mary Engelbreit"
    },
    {
        quote: "No one can make you feel inferiour wihtout your concent.",
        source: "Eleanot Roosevelt"
    },
    {
        quote: "Believe you can and you are halfway there.",
        source: "T. Roosevelt"
    },
    {
        quote: "Those who never believe in magic never find it.",
        source: "Roald Dahl"
    },
    {
        quote: "In next 20 years you probably won't remember this.",
        source: "A good guy"
    },
    {
        quote: "You are growing",
        source: "FrontendDUDE"
    },
]

function getRandomQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length))
    var randomQuote = quotes[randomNumber]
    return randomQuote
}

function printQuote (){
    var quotes = getRandomQuote()
    var quoteContainer = document.getElementById("quote-box")
    var quoteString = `<p class ="quote"> ${quotes.quote} </p>
    <p class= "source"> ${quotes.source}`

    if (quotes.citation){
        quoteString += `<span class="citation"> ${quotes.citation}</span>`
    } else {quoteString += `</p>`}

    quoteContainer.innerHTML = quoteString
}

//automatically change quote in five seconds
window.setInterval(
    function(){
        printQuote()
    }, 5000
)

document.getElementById("loadQuote").addEventListener("click", printQuote, false)