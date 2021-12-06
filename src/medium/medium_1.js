import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let median;
    array.sort((a, b) => a - b);   //sort array from small to big
    if (array.length % 2 == 0) {
        median = array[(array.length/2) - 1];
    } else {
        let lower_median = array[(array.length/2) - 0.5];
        let upper_median = array[(array.length/2) + 0.5];
        median = (lower_median + upper_median) / 2;
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let length = array.length;
    let sum = getSum(array);
    let mean;
    let median = getMedian(array);
    let min;
    let max;
    let get_variance;
    let standard_deviation;

    //sort array from small to big
    array.sort((a, b) => a - b); 
    
    //max and min
    max = array[length - 1];
    min = array[0];

    //mean calculation
    mean = sum / length;

    //variance and standard deviation calculation
    get_variance = variance(array, mean);
    standard_deviation = Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / length);

    return {length: length, sum: sum, mean: mean, median: median, min: min, max: max, variance: get_variance, standard_deviation: standard_deviation};
}

