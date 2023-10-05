function countVowels(str) {
  let count = 0;
  const newStr = str.toUpperCase();
  for (let i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        count++;
    }
  }
  return count;
}

module.exports = countVowels;
