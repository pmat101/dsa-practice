function isPalindrome(str) {
  const splitArr = str.split(" ");
  const splitStr = splitArr.join("");
  const arr = [];
  for (let i = splitStr.length - 1; i >= 0; i--) arr.push(splitStr[i]);
  if (arr.join("") == splitStr) return true;
  else return false;
}

module.exports = isPalindrome;
