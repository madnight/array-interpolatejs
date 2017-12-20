const { interpolateArray } = require('./index.js')
const test = require('ava')
const print = string => process.stdout.write(string + '\n')

test('check if interpolateArray works correctly', t => {
    t.deepEqual(interpolateArray([1, 2, 3], 3), [1, 2, 3])
    t.deepEqual(interpolateArray([3, 2, 1], 3), [3, 2, 1])
    t.deepEqual(interpolateArray([1, 2, 3], 5), [1, 1.5, 2, 2.5, 3])
    t.deepEqual(interpolateArray([], 0), [])
    t.deepEqual(interpolateArray([1], 2), [1, 1])
    t.deepEqual(interpolateArray([9], 9), [9, 9, 9, 9, 9, 9, 9, 9, 9])
    t.deepEqual(interpolateArray([1, 2, 3], 0), [])
    t.deepEqual(interpolateArray([5, 9, 500, 30, 80, 5, 9], 4), [5, 500, 80, 9])
})
