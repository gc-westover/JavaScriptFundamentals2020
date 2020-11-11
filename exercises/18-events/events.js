/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", () => {
    window.alert("Alerted!");
});


/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */
const paymentBtn = document.querySelector("#paymentBtn");
paymentBtn.addEventListener("click", (event) => {
    paymentBtn.disabled = "true";
});

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

const commentsBtn = document.querySelector(".comments-btn");
const comments = document.querySelector("#comments")
commentsBtn.addEventListener("click", (event) => {
    comments.classList.toggle("hidden");
});

/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */

const mysteryText = document.querySelector("#mystery-text");
const mysteryOutput = document.querySelector("#mystery-text+div");
mysteryText.addEventListener("input", (event) => {
    mysteryOutput.textContent = event.target.value;
});

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

const search = document.querySelector("#ocean");
const searchBox = document.querySelector("input[type='search']");
const oceanOutput = document.querySelector("#ocean+p");
search.addEventListener("submit", (event) => {
    event.preventDefault();
    oceanOutput.textContent = `No results for ${searchBox.value} found`;
});

/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */

const termsForm = document.querySelector("#termsForm");
const success = document.querySelector("#terms-success");
const error = document.querySelector("#terms-error");
const agreement = document.querySelector("#terms");
termsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    success.classList.add("hidden");
    error.classList.add("hidden");
    agreement.checked ? 
        (success.classList.remove("hidden"), agreement.classList.remove("is-invalid")) : 
        (error.classList.remove("hidden"), agreement.classList.add("is-invalid"));
});

/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

let currentPage = 1;
const last = document.querySelector("button[page='last']");
const pageJumps = document.querySelectorAll(".page-jump");
const next = document.querySelector("button[page='next']");
const rows = document.querySelectorAll( `tbody>tr`);

rows.forEach((row) => {
    if (row.attributes['data-group'].value != 1) {
        row.classList.add('hidden');
    }
});

function displayPage(page) {
    rows.forEach((row) => {
        console.log(row.attributes['data-group'].value,page)
        if (row.attributes['data-group'].value == page) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

last.addEventListener("click", (event) => {
    currentPage-1<1 ? (currentPage=1) : (currentPage-=1);
    console.log(currentPage);
    displayPage(currentPage);
});
next.addEventListener("click", (event) => {
    currentPage+1>2 ? (currentPage) : (currentPage+=1);
    console.log(currentPage);
    displayPage(currentPage);
});

pageJumps.forEach((pageBtn)=>{
    pageBtn.addEventListener('click', (event) => {
        currentPage = event.target.attributes.page.value;
        displayPage(currentPage)
    })
})