const packageJson = require('./../package.json');

const setAllFlags = (arrOfArgs) =>{
    let flagsValues = {};
    for(let i=0;i<arrOfArgs.length;i++){
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
        else if(arrOfArgs[i] === '-v' || arrOfArgs[i] === '--version')
            flagsValues['v'] = `version ${packageJson.version}`
    }

    return flagsValues;
}

module.exports = {
    setAllFlags
}