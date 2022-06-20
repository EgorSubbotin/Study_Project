"use strict";

const options = {
name: 'test',
widht: 1024,
height: 1024,
colors:{
    border:'black',
    br:'red'
}
};

for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`свойства ${i} со значением ${options[key][i]}`);
        }
    } else {
        console.log(`свойства ${key} со значением ${options[key]}`);
    }       
}

console.log(Object.keys(options).length);