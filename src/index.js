module.exports = function toReadable (number) {

    let numbersFirstTwenty = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    let numbersOfDecades = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    let index = number % 10; // остаток от деления на 10 будет последним числом
    let lastNumber = numbersFirstTwenty[index]; // вычисляем остаток = ключ 
    let indexOfFirstDecade = Math.trunc(number / 10);
    let indexOfFirstHundred = Math.trunc(number / 100);
    // let firstDecade = numbersOfDecades[indexOfFirstDecade];
    // let firstHundred = numbersFirstTwenty[indexOfFirstHundred];


    let insteadOfRecursion = function(recursionNum) {
        let result;
        if (recursionNum === 0) { // если ноль
            result = '';
        } else if (recursionNum < 20) { // если меньше 20
            result = numbersFirstTwenty[recursionNum];
        } else if ((recursionNum % 10) === 0) { // делаем если число меньше 100 и кратно 10
            result = numbersOfDecades[recursionNum / 10]; // возвращаем соответствующее ключу значение
        } else if ((recursionNum % 10) !== 0) { // делаем если число меньше 100 и не кратно 10
            let firstDecade = numbersOfDecades[Math.trunc(recursionNum / 10)]; // первый символ десятых !!!!!
            result = `${firstDecade} ${lastNumber}`; // конкатенация первого символа и последнего
        }
        return result;
    };


    if (number === 0) { // если ноль
        result = 'zero';
    } else if (number < 20) { // если меньше 20
        result = numbersFirstTwenty[number];
    } else if (number < 100 && (number % 10) === 0) { // делаем если число меньше 100 и кратно 10
        let firstDecade = numbersOfDecades[(number / 10)];
        result = firstDecade; // возвращаем соответствующее ключу значение
    } else if (number < 100 && (number % 10) !== 0) { // делаем если число меньше 100 и не кратно 10
        let firstDecade = numbersOfDecades[indexOfFirstDecade]; // первый символ десятых $ $ $ $ $ $ $ $ $
        result = `${firstDecade} ${lastNumber}`; // конкатенация первого символа и последнего
    } else if (number >= 100 && (number % 100) === 0) { // условие если число кратно 100(=>)
        // let firstHundred = numbersFirstTwenty[indexOfFirstHundred]; // первый символ сотых
        let firstHundred = numbersFirstTwenty[Math.trunc(number / 100)];
        result = `${firstHundred} hundred`; // конкатенация первого символа с подстрокой
    } else if (number > 100 && (number % 100) !== 0) { // условие если число больше 100 и не кратно 100
        let firstHundred = numbersFirstTwenty[indexOfFirstHundred]
        result = `${firstHundred} hundred ${insteadOfRecursion(+(`${number}`.slice(1)))}`;
    } else {
        result = 'not yet';
    }
    return result;
}


// подобные задачи удобно решать через  маппинг обьектов - 
// const NUMS = {1: 'One', 2: 'Two', ..., 10: 'Ten' };
// const number = 2;
// return NUMS[number];