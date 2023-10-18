  
function findFirstNonRepeatingCharacter(str){
  for(let i=0; i<str.length; i++){
    let count = 0;
    for(let j=i+1; j<str.length; j++){
      if(str[j] == str[i]){
        count++;
        break;
      }
    }
    if(count == 0)
      return str[i];
  }
}

module.exports = findFirstNonRepeatingCharacter;
