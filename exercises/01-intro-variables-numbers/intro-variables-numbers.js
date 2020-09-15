function myName() {
  let myName = 'test';
  return myName;
}

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  let teachers = null;
  teachers = teachersName; //  <- this is invalid because teachers is a const. How can we fix this?

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = a + b;

  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  return ++age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  return --age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  return parseInt(str);
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition = name.indexOf(letter);
  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  return str.length;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  return str[str.length-1];
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  return place.split(" ")[1];
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  if (arg1>arg2) {
    return arg1;
  }
  return arg2;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let newFullName = `${fullName.split(" ")[0]} ${newLastName}`;
  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let sep = fullName.split(" ");
  let newName = sep[0] + " " + sep[1][0].toUpperCase() + sep[1].slice(1, fullName.length);
  return newName;
}

/**
 * Ignore me. This is for the tests
 */

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
};
