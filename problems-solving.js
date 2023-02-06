// Problem 1: Let’s play a mind game
console.log("/n one: /n");

function mindGame(num) {
    const res = (num * 3 + 10) / 2 - 5;
    return res;
}
console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));

// Problem 2: Finding even or odd
console.log("/n two: /n");

function evenOdd(str) {
    let length = str.length;
    if (length % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

evenOdd('Phero'); 
evenOdd('Batch7'); 
evenOdd('chatgpt'); 
evenOdd('apple is '); 

// Problem 3: Is Less or Greater than seven
// function isLGSeven(num) {
//     let diff = Math.abs(num - 7);
//     if (diff < 7) {
//       return num - 7;
//     } 
//     else {
//       return diff * 2;
//     }
//   }
//   console.log(isLGSeven(6));
//   console.log(isLGSeven(-15));
//   console.log(isLGSeven(15));

// ...........updated
console.log("/n three: /n");
function isLGSeven(num) {
    let diff = num - 7;
    if (diff < 7) {
      return diff;
    } 
    else {
      return num * 2;
    }
  }
  console.log(isLGSeven(6));
  console.log(isLGSeven(-15));
  console.log(isLGSeven(15));

//   Problem 4: Finding Bad data
console.log("/n four: /n");

function findingBadData(array) {
    let BadData = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        BadData += 1;
      }
    }
    return BadData;
  }
  const x=[1,2,5];
  const x1=[2, -5, -7, -13];
  const x2=[ -4, -9, -5, -33, -55];
  console.log(findingBadData(x));
  console.log(findingBadData(x1));
  console.log(findingBadData(x2));


//   Problem 5: Convert your gems into diamond
console.log("/n five: /n");

function gemsToDiamond(num1, num2, num3) {
    let res = (21 * num1) + (32 * num2) + (43 * num3);
    if (res >= (1000 * 2)) {
        res -= 2000;
    }
    return res;
}

console.log(gemsToDiamond(1,1,1));
console.log(gemsToDiamond(20,200,50));
console.log(gemsToDiamond(100,5,1));