console.log('SayHi Function')
console.log('\n')

function sayHi(name) {
    return `Hi, ${name}`
}

console.log(sayHi('Jimmy'))
console.log('\n')




console.log('bigString Function')
console.log('\n')

function bigString(str1, str2) {
    if (str1.length > str2.length) {
        return str1
    } else if (str2.length > str1.length) {
        return str2
    } else if (str1.length === str2.length) {
        return 'No bigString, Both strings are equal in size !'
    }
}

console.log(bigString('hello', 'goodbye'))
console.log('\n')




console.log('bigNumber Function')
console.log('\n')

function bigNumber(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else if (num1 === num2) {
        return 'No bigNumber, Both strings are equal in size !'
    }
}

console.log(bigNumber(3, 7))
console.log('\n')




console.log('fiveMoreOdd Function')
console.log('\n')
function fiveMoreOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] += 5
        }
    }
    return arr
}


console.log(fiveMoreOdd([1,2,3,4]))
console.log('\n')




console.log('arraySummer Function')
console.log('\n')
function arraySummer(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}


console.log(arraySummer([1,2,3,4]))
console.log('\n')




console.log('everyDivisible Function')
console.log('\n')
function everyDivisible(n) {
   for (let i = 1; i <= 100; i++) {
    if (i % n === 0) {
        console.log(i)
    }
   }
}


console.log(everyDivisible(7))
console.log('\n')