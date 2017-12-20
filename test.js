const { interpolateArray } = require('./index.js')
const test = require('ava')
const print = string => process.stdout.write(string + '\n')

test('supports negative number', t => {
    t.deepEqual(interpolateArray([1, 2, 3], 3), [1, 2, 3])
    t.deepEqual(interpolateArray([1, 2, 3], 5), [1, 1.5, 2, 2.5, 3])
})
