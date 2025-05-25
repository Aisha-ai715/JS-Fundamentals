let number = function(num){
    if(num === null || num === ""){
        console.log('No argument');
    }
    else{
        console.log('Argument found');
    }
};

let num = prompt('please enter argument');
number(num);