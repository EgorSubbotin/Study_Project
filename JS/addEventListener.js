"use strict";

//const btn=document.querySelector('button');
// btn.onclick=function(){
//     alert('clik');
// };

// btn.addEventListener('click', ()=>{
//     alert('clik');
// });

//let i=0;
const write = (e)=>{
    console.log(e.target);
    // i++;
    // if (i>0){
    //     btn.removeEventListener('click', write);
    // }
};
// btn.addEventListener('click', write);

// const lin = document.querySelector('a');
// lin.addEventListener('click', function (event){
//     event.preventDefault();
//     console.log(event.target);
// });

const btns=document.querySelectorAll('button');
btns.forEach(btn =>{
    btn.addEventListener('clikc', write);
});