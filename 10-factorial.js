const arg1 = Number(process.argv[2]);

const frictional = function(arg1){
    if(isNaN(arg1) || arg1<0){
        return 1;
    } else {
        let x = 1
        for(let i =arg1; i>=1; i--){
            x *= i;
        }
        return x;
    }
}

console.log(frictional(arg1));