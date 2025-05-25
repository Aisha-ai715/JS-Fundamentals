let arg1 = process.argv[2];

if(Number(arg1)){
    console.log(`My number: ${Number(arg1)}`);
}else{
    console.log('Not a number');
}
