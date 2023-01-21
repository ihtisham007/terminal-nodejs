
const setAllFlags = (arrOfArgs) =>{
    let flagsValues = {};
    for(let i=0;i<arrOfArgs.length-1;i++){
        if(arrOfArgs[i] === '-f' || arrOfArgs[i] === '--file'){
            flagsValues['f'] = arrOfArgs[i+1];
        }
        else if(arrOfArgs[i] === '-s' || arrOfArgs[i] === '--search'){
            flagsValues['s'] = arrOfArgs[i+1]
        }
        else if(arrOfArgs[i] === '-g' || arrOfArgs[i] === '--generate')
            flagsValues['g'] = arrOfArgs[i+1];
        else if(arrOfArgs[i] === '-o' || arrOfArgs[i] === '--output')
            flagsValues['o'] = arrOfArgs[i+1]
    }

    return flagsValues;
}

module.exports = {
    setAllFlags
}