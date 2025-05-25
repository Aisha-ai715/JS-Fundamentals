const arg1 = parseInt(process.argv[2]);

function factorial(x) {
    if (isNaN(x) || x < 0) {
        return 1; // or throw new Error('Invalid input');
    }
    if (x === 0) {
        return 1;
    }

    let result = 1;
    for (let i = x; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(arg1));