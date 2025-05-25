const arg1 = BigInt(process.argv[2]);

const frictional = function(n) {
    if (n < 0n) {
        return 1n;
    } else {
        let result = 1n;
        for (let i = n; i >= 1n; i--) {
            result *= i;
        }
        return result;
    }
};

console.log(frictional(arg1).toString());