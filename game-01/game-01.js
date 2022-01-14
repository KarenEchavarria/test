'use strict';

const firstMatchArray = (arrayToMatch, n) => arrayToMatch.reduce((subset, numberA, index) => {

	if(subset.length)
		return subset

	const arrayToCompare = arrayToMatch.slice(index)

	const matchedNumber = arrayToCompare.find(numberB => (numberA + numberB) === n)

	return matchedNumber ? [numberA, matchedNumber]: subset
}, [])

console.log(firstMatchArray([2, 5, 8, 14, 0], 10))
console.log(firstMatchArray([2, 15, 8, 5, 3], 8))

module.exports = firstMatchArray