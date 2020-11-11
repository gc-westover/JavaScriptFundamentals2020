/**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

const btn = document.querySelector(".button");
const doggo = document.querySelector("#image");
btn.addEventListener("click", (event) => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {doggo.src = data.message});
});