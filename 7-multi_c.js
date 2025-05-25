let arg1 = process.argv[2];
let x = Number(arg1);

if(!x || x<=0){
    console.log('Missing number of occurrences');
}else{
    let i = 0;
    while(i<x){
        console.log('C is fun');
        i++;
    }
}
