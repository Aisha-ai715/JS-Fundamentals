const arg1 = parseInt(process.argv[2]);

function factorial(x) {
    if (isNaN(x) || x < 0) {
        return 1; // or throw new Error('Invalid input');
    }
    if (x === 0) {
        return 1;
    }

    
    return x * factorial(n-1);
}

console.log(factorial(arg1));