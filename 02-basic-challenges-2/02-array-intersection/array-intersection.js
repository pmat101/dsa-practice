function arrayIntersection(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr1[i]) arr3.push(arr2[j]);
    }
  }
  return arr3;
}

module.exports = arrayIntersection;
