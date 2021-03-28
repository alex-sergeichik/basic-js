module.exports = function countCats(ears) {
  const arrOfEars = ears.flat().filter((value) => value === "^^");

  return arrOfEars.length || 0;
}
