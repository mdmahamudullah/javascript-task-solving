// The mindGame function will take a positive number as input. Then multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.

function mindGame(num) {
    const inputType = typeof (num);
    if (num < 0 || inputType !== "number") {
        return "input should be a positive number.";
    }
    else {
        const res = (num * 3 + 10) / 2 - 5;
        return res;
    }

}


//This evenOdd function takes a string as an argument and checks if its length is even or odd. If the input type is not a string, it returns an error message. Otherwise, it returns "even" if the string length is even and "odd" if the length is odd.

function evenOdd(str) {
    let length = str.length;
    const inputType = typeof (str);
    if (inputType !== "string") {
        return "input should be a string.";
    }
    else {
        if (length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }

}



//The isLGSeven Function finds the difference between the input value and 7. If this difference is smaller than 7, it returns the subtraction. Otherwise, it returns double of the input. And if the input type is not a number, it returns an error message.

function isLGSeven(num) {
    let diff = num - 7;
    const inputType = typeof (num);
    if (inputType !== "number") {
        return "input should be a number.";
    }
    else {
       if (diff < 7) {
        return diff;
    }
    else {
        return num * 2;
    }
    }

    
}



//This findingBadData function takes in an array as input and returns the count of all negative values as BadData present in the array. If the input is not an array, it will return an error message.


function findingBadData(array) {
    if (!Array.isArray(array)) {
        return "Please provide an array as input";
      }
    let BadData = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            BadData += 1;
        }
    }
    return BadData;
}



//This gemsToDiamond function takes three numbers as parameters and returns the total number of diamonds generated using the given number of gems. The calculation is done using the following formula: the number of diamonds = (21 * number of gems1) + (32 * number of gems2) + (43 * number of gems3). If the total number of diamonds is greater than or equal to 2000, then the final result will be the total number of diamonds minus 2000. Otherwise,it will return total number of diamonds.


function gemsToDiamond(num1, num2, num3) {
     
    if (typeof (num1)  !== "number"||typeof (num2)  !== "number"||typeof (num3)  !== "number") {
        return "input should be number.";
    }
    let diamond = (21 * num1) + (32 * num2) + (43 * num3);
    if (diamond >= (1000 * 2)) {
        diamond -= 2000;
    }
    return diamond;
}
