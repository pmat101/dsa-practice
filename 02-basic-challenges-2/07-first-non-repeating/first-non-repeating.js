  
function findFirstNonRepeatingCharacter(str){
  let count = 0;
  for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length; j++){
      if(str[j] == str[i])
        count=1;
    }
    if(count == 0)
      return str[i];
    else
      count = 0;
  }
  if(count == 1)
    return null;
}

module.exports = findFirstNonRepeatingCharacter;
