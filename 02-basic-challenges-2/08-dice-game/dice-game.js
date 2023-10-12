function diceGameSimulation(num) {
    const arr = [];
    for(i=0; i<num; i++){
        let dice = () => {return Math.ceil(Math.random() * 6)};
        let dice1 = dice();
        let dice2 = dice();
        let sum = dice1+dice2;
        let result;
        if(sum == 7 || sum == 11)
            result = 'win';
        else if(sum == 2 || sum == 3 || sum == 12)
            result = 'lose';
        else
            result = 'roll again';
        arr.push({ 'dice1': dice1, 'dice2': dice2, 'sum': sum, 'result': result });
    }
    return arr;
}

module.exports = diceGameSimulation;
