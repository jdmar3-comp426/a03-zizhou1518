import mpg_data from "./data/mpg_data.js";
import {getStatistics, getSum} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: avgMpg(),
    allYearStats: allYearStats(),
    ratioHybrids: ratioHybrids(),        
    
};

export function avgMpg() {
    let leng = mpg_data.length;
    let city = [];
    let high = [];
    for (let i = 0; i < leng; i++) {
        city.push(mpg_data[i].city_mpg);
        high.push(mpg_data[i].highway_mpg);
    }
    return {city: getSum(city) / leng, highway: getSum(high) / leng}
};

export function allYearStats() {
    let leng = mpg_data.length;
    let year = [];
    for (let i = 0; i < leng; i++) {
        year.push(mpg_data[i].year);
    }
    return getStatistics(year);
};

export function ratioHybrids() {
    let leng = mpg_data.length;
    let ratio = 0;
    for (let i = 0; i < leng; i++) {
        if (mpg_data[i].hybrid) {
            ratio++;
        }
    }
    return ratio/leng;
};

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};

export function avgMpgByYearAndHybrid() {
    let final = {};
    let len = mpg_data.length;
    let yearf = []
    for (let i = 0; i < len; i++) {
        yearf.push(mpg_data[i].year)
    }
    let uyear = [...new Set(yearf)];
    uyear.sort()

    for (let i = 0; i < uyear.length; i++) {
        final[uyear[i]] = {};
    }

    let i = 0;
    while (i < uyear.length) {
        let hybridcity = [];
        let hybridhigh = [];
        let noncity = [];
        let nonhigh = [];
        for (let j = 0; j < len; j++) {
            if (mpg_data[j].year == uyear[i]) {
                if (mpg_data[j].hybrid) {
                    hybridcity.push(mpg_data[j].city_mpg);
                    hybridhigh.push(mpg_data[j].highway_mpg);
                }else{
                    noncity.push(mpg_data[j].city_mpg);
                    nonhigh.push(mpg_data[j].highway_mpg);
                }
            }
        }

        final[uyear[i]] = {hybrid: {city: getSum(hybridcity) / hybridcity.length, highway: getSum(hybridhigh) / hybridhigh.length}, nonHybrid: {city: getSum(noncity) / noncity.length, highway: getSum(nonhigh) / nonhigh.length}};

        i++;
    }

        return final
};