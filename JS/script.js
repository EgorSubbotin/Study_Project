"use strict";

const nomberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?',''),
 a=prompt('Один из последних просмотренных фильмов?'),
 b=prompt('На сколько оцените его?'),
 c=prompt('Один из последних просмотренных фильмов?'),
 d=prompt('На сколько оцените его?');

const lMovieDB= {
    count:nomberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

lMovieDB.movies[a]=b;
lMovieDB.movies[c]=d;
console.log(lMovieDB.movies);


if ('hgkh'){
    console.log(true);
}

let q=3, t=0, s=3, e=2;
console.log(q===3 && (t===2 || e) && s===3);

console.log(5===5&& 3>1 || 5);


// let result='';
// for (let i=0; i<6; i++){
//        result+='*';
//       console.log(result);
// }

let res='';
for(let i=0; i<7; i++){
    for (let j=0; j <i; j++){
        res+='*';
    }
    res+='\n';
}
console.log(res);