function findMissingLetter(arr) {
    const start = arr[0].charCodeAt(0);
    const end = arr[arr.length - 1].charCodeAt(0);
    for(let i=start; i<=end; i++){
        if(arr.includes(String.fromCharCode(i)) == false)
        return String.fromCharCode(i);
    }
}

module.exports = findMissingLetter;
