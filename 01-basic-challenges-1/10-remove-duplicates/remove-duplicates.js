function removeDuplicates(arr) {
  const arr2 = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr[i]) count = 1;
    }
    if (count == 0) arr2.push(arr[i]);
    else count = 0;
  }
  return arr2;
}

module.exports = removeDuplicates;
