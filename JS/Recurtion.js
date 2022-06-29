"use strict";

function int (a,b){
    let x=1;
    for (let i=0; i<b; i++){
        x*=a;
    }
    return(x);
}

console.log(int(0,3));

function int2 (a,b){
    if (b==1){
        return (a);
    } else{
       return a*=int2 (a, b-1);
    }
}
console.log(int2(3,3));

const fak = (x)=>{
    if (x===1){
        return(1);
    }else{
        return(x*fak(x-1));
    }
};
console.log(fak(6));

let students={
    js:[{
        name:'John',
        progress:100
    },{
        name:'Ivan',
        progress:60
    }],

    html:{
        basic: [{
            name:'Peter',
            progress:20
        },{
            name:'Ann',
            progress:18
        }],

        pro:[{
            name:'Sam',
            progress:10
        }]
    }
};

// function conterProgress(data){
//     let stud=0,
//         prog=0;
    
//     for(let cours of Object.values(data) ){
//         if (Array.isArray(cours)){
//             stud+=cours.length;
//             for(let pers of Object.values(cours)){
//                 prog+=pers.progress;
//             }
//         } else {
//             for(let subcours of Object.values(cours) ){
//                 if (Array.isArray(subcours)){
//                     stud+=subcours.length;
//                     for(let pers of Object.values(subcours)){
//                         prog+=pers.progress;
//                     }
//                 }
//             }    
//         }
//     }
//     return prog/stud;
// }
//console.log(conterProgress(students));

function conterProgressEtudients(data){
    if (Array.isArray(data)){
        let total=0;

        for (let i = 0; i<data.length; i++){
            total+=data[i].progress;
        }
        return [total, data.length];
    } else {
        let ret=[0, 0];
        for(let subData of Object.values(data)){
            const vot=conterProgressEtudients(subData);
            ret[0]+=vot[0];
            ret[1]+=vot[1];
        }
        return ret;        
    }
}
const resalt = conterProgressEtudients(students);
console.log(resalt[0], resalt[1]);
console.log(resalt[0]/resalt[1]);