function validateEmail(str) {
    if(str.includes('@') && str.includes('.') && str[0] != '@' && str[0] != '.')
        return true;
    else
        return false;
}

module.exports = validateEmail;
