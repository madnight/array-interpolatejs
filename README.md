# array-interpolatejs
Interpolate an array of numbers in js

## Requirements
* node 8.0 or higher (need fancy syntax features thats why 8+)
* npm or yarn

## Installation

`npm install array-interpolatejs`

## Usage
```javascript
const { interpolateArray } = require('array-interpolatejs')

interpolateArray([1, 2, 3], 3)
//[1, 2, 3]

interpolateArray([3, 2, 1], 3)
//[3, 2, 1]
    
interpolateArray([1, 2, 3], 5)
//[1, 1.5, 2, 2.5, 3]

interpolateArray([], 0)
//[]

interpolateArray([1], 2)
//[1, 1]

interpolateArray([9], 9)
//[9, 9, 9, 9, 9, 9, 9, 9, 9]

iterpolateArray([5, 9, 500, 30, 80, 5, 9], 4)
//[5, 500, 80, 9]
```
