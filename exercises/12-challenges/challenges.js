/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
function findLongestWordLength(str) {
  let words = str.split(" ")
  let longest = 0
  for (let word of words) {
    if (longest < word.length) {
      longest = word.length
    }
  }
  return longest
}

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
function fearNotLetter(str) {
  for (let i=0; i<str.length-1;i++) {
    if (str.charCodeAt(i+1)-str.charCodeAt(i) !== 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  };
}
module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
