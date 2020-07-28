const fs = require('fs')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n").filter(Boolean)

let massArr = input.map((n) => 
    parseInt(n)
        
)

function getFuel(arr) {
    let fuel = arr.map(num => Math.floor((num / 3) - 2))
    let totalFuel = fuel.reduce((a, b) => a + b, 0)
    return totalFuel
}

console.log(getFuel(massArr));



