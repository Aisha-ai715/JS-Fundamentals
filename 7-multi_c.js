let arg1 = process.argv[2];
let x = Number(arg1);

if(!x || x<=0){
    console.log('Missing number of occurrences');
}else{
    for(let i=0; i<x; i++){
        console.log('C is fun');
    }
}
