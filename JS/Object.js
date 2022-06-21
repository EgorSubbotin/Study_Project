"use strict";

// const options = {
// name: 'test',
// widht: 1024,
// height: 1024,
// colors:{
//     border:'black',
//     br:'red'
// }
// };

// const coppyOptions = copy(options);
// //const coppyOptions={...options};
// coppyOptions.widht=100;
// coppyOptions.colors.br ='rouge';
// console.log(coppyOptions, options);

// function copy(nom){ 
//     const objCopy={};
//     for (let key in nom){
//         if (typeof(nom[key]) === 'object'){
//             objCopy[key]={...nom[key]};
//         } else {
//            objCopy[key]=nom[key];                 
//         }                
//     }
//     return objCopy;
// }


// function copy(nom){ 
//     const objCopy={};
//     for (let key in nom){
//         objCopy[key]=nom[key];       
//     }
//     return objCopy;
// }


// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`свойства ${i} со значением ${options[key][i]}`);
//         }
//     } else {
//         console.log(`свойства ${key} со значением ${options[key]}`);
//     }       
// } 

//console.log(Object.keys(options).length);


const options = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors:{
        border:'black',
        br:'red',
        tr: {
            aw:1,
            bw:2
        }
    }
};
    const coppyOptions = copy(options);
    //const coppyOptions={...options};
    coppyOptions.widht=100;
    coppyOptions.colors.br ='rouge';
    coppyOptions.colors.tr.aw = 55;
    console.log(coppyOptions, options);
    
    
    // function copy(nom){ 
    //     const objCopy={};
    //     for (let key in nom){
    //         if (typeof(nom[key]) === 'object'){                
    //             objCopy[key]={...nom[key]};               
    //         } else {
    //            objCopy[key]=nom[key];                 
    //         }                
    //     }
    //     return objCopy;
    // }

    function copy(nom){ 
        const objCopy={};
        for (let key in nom){
            if (typeof(nom[key]) === 'object'){
                for (let key1 in nom[key]){
                    if (typeof(nom[key][key1]) === 'object'){
                        objCopy[key][key1]={...nom[key][key1]};
                    }else {
                        objCopy[key]={...nom[key]};
                    }
                }                
            } else {
               objCopy[key]=nom[key];                 
            }                
        }
        return objCopy;
    }