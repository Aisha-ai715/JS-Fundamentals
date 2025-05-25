const arg1 = process.argv[2];
const size = Number(arg1);

if(size<=0 || isNaN(size)){
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