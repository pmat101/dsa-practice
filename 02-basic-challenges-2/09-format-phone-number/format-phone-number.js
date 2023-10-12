function formatPhoneNumber(arr) {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(formatPhoneNumber([0,9,8,4,8,4,9,0,4,4]))

module.exports = formatPhoneNumber;
