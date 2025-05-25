let arg1 = process.argv[2];
size = Number(arg1)

if(!size || size<=0){
    console.log('Missing size');
}else{
    for(let i=0; i<size; i++){
        let square = ''
        for(let r=0; r<size; r++){
            square +='X';
        }
        console.log(square);
    }
}