const btn= document.getElementById('btn')
const output= document.querySelector('.output');

let quote = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "It always seems impossible until it is done. - Nelson Mandela",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Peter Drucker"
]

btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random];
})