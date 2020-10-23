/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

let el1 = document.querySelector(".alert-danger")
el1.setAttribute("role", "alert")
console.log(el1.attributes)

let el2 = document.querySelector(".alert-warning>div>a")
console.log(el2)
el2.setAttribute('href','https://developer.mozilla.org/en-US/docs/Web/JavaScript')

let el3 = document.querySelector('.container div:nth-child(3)')
console.log(el3)
el3.innerHTML = 'I am victorious!' 

let el4 = document.querySelector('.container div:nth-child(4)')
el4.setAttribute("style", "background-color: rgba(80,200,80,0.5);")

let el5 = document.querySelector('.container div:nth-child(5)')
el5.setAttribute("class","alert alert-danger text-primary")

let el6 = document.querySelector('.container div:nth-child(6)')
el6.setAttribute('style', 'display: none;')

let el7 = document.querySelector('.hidden')
el7.innerHTML = "Peek a boo!"
el7.classList.remove("hidden")

let el8 = document.querySelector('.container div:nth-child(9)')
console.log(el8)
let button = el8.querySelector('button')
if (button.classList.contains('btn-primary')) {
    el8.querySelector('div').innerHTML = '✓ blue'
}