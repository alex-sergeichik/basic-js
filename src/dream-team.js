module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  const arr = members.map((word) => {
    if (typeof word === "string") {
      return word.trim().charAt(0).toUpperCase()
    }
  });

  if (arr.length === 0) {
    return false
  }

  return arr.sort().join('');

}