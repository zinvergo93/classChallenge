export default function() {
    return '<div>classChallenge</div>'
}

export const greeting = 'Welcome!';

export function sumArray(a, b, c) {
    const sum = [a, b, c].reduce(function(a,b) { return a + b; }, 0)
    return sum
}

export function stringUpper(capString) {
    return capString.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export function arrayWeave (){
    function splicer(array, element, index) {
        array.splice(index * 2, 0, element);
        return array;
    }
    function weave(arr1,arr2) {
        return arr1.reduce(splicer, arr2.slice());
    }

    let arr1 = ['a', 'b', 'c', 'd']
    let arr2 = [1, 2, 3, 4]

    let solution = weave(arr1, arr2)

    console.log(solution)
}
// Random with Math library
export const exponentRandom = () => {
    const numOne = Math.floor((Math.random()* 10) + 1)
    const numTwo = Math.floor((Math.random()* 10) + 1)
    console.log(numOne, numTwo)
    return Math.pow(numOne, numTwo);
}

// Without Math Library, with **
export const exponentTwo = (numOne, numTwo) => {
    return parseInt(numOne ** numTwo)
}

// Without either
export const exponentThree = (numOne, numTwo) => {
    let result = 1;
    for (let i = 0; i < numTwo; i++) {
        result *= numOne;
    }
    return result;
}

// Jordan's solution
export const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

