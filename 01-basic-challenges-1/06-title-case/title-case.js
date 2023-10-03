function titleCase(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i - 1] == " ") arr.push(str[i].toUpperCase());
    else arr.push(str[i]);
  }
  return arr.join("");
}

module.exports = titleCase;
