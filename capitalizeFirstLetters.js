//capitalizeFirstLetters
let capitalizeFirstLetters = (str) => {
  if (str === "") {
    return "";
  }
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    let word = array[i].split("");
    word[0] = word[0].toUpperCase();
    array[i] = word.join("");
  }
  return array.join(" ");
};

module.exports = capitalizeFirstLetters;
