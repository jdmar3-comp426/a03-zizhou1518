/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let c = a + b;
    return a + " + " + b + " = " + c;
}

/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const numbers = [];
    for (let i = 0; i <= endNumber - startNumber; i++) {
        numbers[i] = startNumber + i;
    }
    return numbers;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let min1;
    let max1;
    for (let i = 0; i < numbers.length; i++) {
        if (i == 0) {
            min1 = numbers[i];
            max1 = numbers[i];
        } else {
            if (numbers[i] < min1) {
                min1 = numbers[i];
            }
            if (numbers[i] > max1) {
                max1 = numbers[i];
            }
        }

    }
    return {min: parseInt(min1), max: parseInt(max1)};

}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var dict = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] in dict) {
            dict[i] += 1;
        } else {
            dict[i] = 1;
        }
    }

    return dict;
}
