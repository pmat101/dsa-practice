function findFirstNonRepeatingCharacter(str){
  let count = 0;
  for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
      if(str[j] == str[i])
        count++;
    }
    if(count <= 1)
      return str[i];
    else
      count = 0;
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
