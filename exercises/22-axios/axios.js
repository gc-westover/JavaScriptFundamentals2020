/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */
const dropdown = document.querySelector("#dropdown")
const charImage = document.querySelector('#get-schwifty')

let characterData;
axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {characterData = response.data.results; return response.data.results})
    .then((data) => data.forEach(el => populateDropdown(el)))
    .catch((error) => console.log(error))

dropdown.addEventListener('change', (event) => {
    console.log(event.target.value)
    let charName = event.target.value
    charImage.src = getCharImage(charName)
})

function populateDropdown(data) {
    dropdown.appendChild(
        document.createElement('option')
    ).innerHTML = data.name
}

function getCharImage(name) {
    try {
        for (let char of characterData) {
            if (char.name === name) {return char.image}
        } 
        return 'https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg'
    } catch (error) {
        console.log(error)
    }
}

