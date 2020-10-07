export default function() {
    return '<div>classChallenge</div>'
}

export const greeting = 'Welcome!';

export function sumArray(a, b, c) {
    const sum = [a, b, c].reduce(function(a,b) { return a + b; }, 0)
    return sum
}

