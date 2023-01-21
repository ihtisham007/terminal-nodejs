const fs  = require('fs');

const {setAllFlags} = require('./component/setFlags');

const args = process.argv.slice(2);


//flags for terminal input 
let flagsValues = setAllFlags(args)



const readStream = fs.createReadStream(flagsValues['f']);

fs.stat(flagsValues['f'], (err, stats) => {
    if (err) throw err;
    console.log(`Size of file: ${stats.size/1000/1000} mb`);
});


readStream.setEncoding('utf-8');
let header = '';
let itera = 0;
readStream.on('data', async(chunk) => {
    const chunkSplit = chunk.split('\n')
    
    for(let i=0;i<chunkSplit.length;i++){
        
        if(i==0 && header.length === 0){
            header = chunkSplit[i]; 
            header = header.trim();
            header = header.replace('\n','')
        }
        if('s' in flagsValues){
            if(chunkSplit[i].match(flagsValues['s'],'i'))
                console.log('\x1b[32m%s\x1b[0m',chunkSplit[i])
            // else 
            //     console.log('\x1b[31m%s\x1b[0m',chunkSplit[i])
        }
        else if('g' in flagsValues && !('o' in flagsValues) && i>0){
            console.log(`INSERT INTO DIMONLOOKUPSEX8277 (${header.replaceAll('\n','')}) VALUES (${chunkSplit[i]})`)
        }
        else if('g' in flagsValues && ('o' in flagsValues && flagsValues['g'] === 'sql') && i>0){
 
            chunkSplit[i] = chunkSplit[i].replace('\n\r','')
            chunkSplit[i]= chunkSplit[i].trim();
            const getSQl = `INSERT INTO DIMONLOOKUPSEX8277 (${header}) VALUES (${chunkSplit[i]})\n`;
            if(chunkSplit[i].length>0){
                fs.appendFile(flagsValues['o'],getSQl, (err) => {
                    if (err) throw err;
                    
                });
            }
        }
        else if('g' in flagsValues && ('o' in flagsValues && flagsValues['o'] === 'json') && i>0){
 
            chunkSplit[i] = chunkSplit[i].replace('\n\r','')
            chunkSplit[i]= chunkSplit[i].trim();
            const getSQl = `INSERT INTO DIMONLOOKUPSEX8277 (${header}) VALUES (${chunkSplit[i]})`;
            if(chunkSplit[i].length>0){
                fs.appendFile(flagsValues['o'],getSQl, (err) => {
                    if (err) throw err;
                    
                });
            }
        }
        

        
    }
    
});


