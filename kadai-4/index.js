const product = (a, b) => {
    return a * b
}

const product2 = function(a, b){
    return a * b
}

const result1 = product(107, 109)
console.log(result1)

const sum = (n) => {
    let result = 0
    for(i = 1; i <= n; i= i + 1){
        result = result + i
    }
    return result
}
const result2 = sum(500)
console.log(result2)