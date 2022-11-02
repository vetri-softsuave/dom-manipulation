import quotes from "./quotes.js";
const quote = document.querySelector('.text-area');
const author = document.querySelector('.person');
const btn = document.querySelector('button');

btn.addEventListener('click', generateQuote);

function generateQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
}
