"use strict";

const nomberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?','');
const lMovieDB= {
    count:nomberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

 for (let i=0; i<2; i++){
    const a=prompt('Один из последних просмотренных фильмов?' ,''),
          b=prompt('На сколько оцените его?' ,'');
     if (a==''|| b== '' || a==null || b==null || a.length>50   ){
              i--;
              console.log ('Error');
     } else {
            lMovieDB.movies[a]=b;
            console.log('Done');
     }
 }
 
console.log(lMovieDB); 