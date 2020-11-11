/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */
const blockquote = document.querySelector("#quote")
const getQuoteBtn = document.querySelector("#getQuote")

async function getQuote() {
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    const quote = await response.json()
    return quote[0]
}

getQuoteBtn.addEventListener('click', (event) => {
    getQuote().then(quote => {blockquote.textContent = quote})
})