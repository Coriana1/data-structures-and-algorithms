'use strict';
/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.
For example:
{
  name: 'bob',
  age: 32
}
Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */
function transformToLis(obj) {
  return Object.entries(obj).map(([key, value]) => `<li>${key}: ${value}</li>`);
}
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
Note: You might need to use the same method more than once.
For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
const count = (target, input) => {
  return input.reduce((acc, arr) => {
    return acc + arr.filter((num) => num === target).length;
  }, 0);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.
You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.
For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
const totalSum = (input) => {
  return input.reduce((acc, arr) => {
    return acc + arr.reduce((subAcc, num) => {
      return subAcc + num;
    }, 0);
  }, 0);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.
This function should first remove any elements that are not numbers or are not divisible by five.
This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
const divisibleByFiveTwoToThePower = (input) => {
  return input.map((arr) => {
    return arr.filter((num) => {
      return typeof num === 'number' && num % 5 === 0;
    }).map((num) => {
      return Math.pow(2, num);
    });
  });
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.
The names should be combined into a single string with each character name separated by "and".
For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */
let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];
let findMaleAndFemale = (data) => {
  let names = data.filter(character => character.gender === 'male' || character.gender === 'female')
    .map(character => character.name)
    .join(' and ');
  return names;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the character who is the shortest in height.
------------------------------------------------------------------------------------------------ */
let findShortest = (data) => {
  let shortest = data.reduce((prev, current) => parseInt(prev.height) < parseInt(current.height) ? prev : current);
  return shortest.name;
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7 - Stretch Goal

// Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

// Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

// Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

// The top row of the board is considered row zero and row numbers increase as they go down.
// ------------------------------------------------------------------------------------------------

const battleship = (board, row, col) => {
  //  Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */

const calculateProduct = (numbers) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const averageDailyTemperature = (weather) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const lowestWeeklyAverage = (weather) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

const excel = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-12.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
    expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the max value', () => {
    expect(findMax([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(24);
  });
});

describe('Testing challenge 3', () => {
  test('It should return the total sum', () => {
    expect(totalSum([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(81);
    expect(totalSum([])).toStrictEqual(0);
  });
});

describe('Testing challenge 4', () => {
  test('It should add the hourly totals array', () => {
    expect(grandTotal(cookieStores)).toStrictEqual([88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]);
  });
});

describe('Testing challenge 5', () => {
  test('It should create an object of data for each store', () => {
    expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 p.m.' },
      { sales: '139 cookies', time: '1 p.m.' },
      { sales: '161 cookies', time: '2 p.m.' },
      { sales: '145 cookies', time: '3 p.m.' },
      { sales: '232 cookies', time: '4 p.m.' },
      { sales: '276 cookies', time: '5 p.m.' },
      { sales: '207 cookies', time: '6 p.m.' },
      { sales: '161 cookies', time: '7 p.m.' },
      { sales: '169 cookies', time: '8 p.m.' }
    ]);

    expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the number 24', () => {
    expect(howManyTreats(errands)).toStrictEqual(24);
  });
});

xdescribe('Testing challenge 7', () => {
  const battleshipData = [
    ['#', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    ['#', ' ', ' ', ' '],
    [' ', ' ', '#', '#'],
  ];

  test('It should return "hit" when it hits a boat', () => {
    expect(battleship(battleshipData, 0, 0)).toStrictEqual('hit');
    expect(battleship(battleshipData, 1, 0)).toStrictEqual('hit');
  });

  test('It should return "miss" when it doesn\'t hit a boat', () => {
    expect(battleship(battleshipData, 0, 1)).toStrictEqual('miss');
    expect(battleship(battleshipData, 3, 0)).toStrictEqual('miss');
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should multiply all the numbers together', () => {
    expect(calculateProduct([[1, 2], [3, 4], [5, 6]])).toStrictEqual(720);
  });

  test('It should return zero if there are any zeroes in the data', () => {
    expect(calculateProduct([[2, 3, 4, 6, 0], [4, 3, 7], [2, 4, 6]])).toStrictEqual(0);
  });
  test('It should work even if some of the arrays contain no numbers', () => {
    expect(calculateProduct([[1, 2], [], [3, 4, 5]])).toStrictEqual(120);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should calculate and return the average temperature of the data set', () => {
    expect(averageDailyTemperature(weeklyTemperatures)).toStrictEqual(60.25);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should return the lowest weekly average temperature within the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(57);
    expect(lowestWeeklyAverage(lowestWeeklyTemperatureData)).toStrictEqual(46);
  });
});

xdescribe('Testing challenge 11', () => {
  test('It should return the total count for each row', () => {
    let result = excel('1,1,1\n4,4,4\n9,9,9');
    expect(result.length).toStrictEqual(3);
    expect(result[0]).toStrictEqual(3);
    expect(result[1]).toStrictEqual(12);
    expect(result[2]).toStrictEqual(27);
  });
});
