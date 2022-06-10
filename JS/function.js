"use strict";

let numberOfFilms;
function start() {
    numberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?','');

    while (numberOfFilms==''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?','');
    }
}
 
start();

const lMovieDB= {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberMyFilm(){
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
     
}

// rememberMyFilm();

function showMyDB(){
    if (!lMovieDB.privat){
        console.log(lMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for (let i=1; i<4; i++){
        lMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();


// const usdCurr= 28,
//       discount = 0.9;

// function convert (amount, curr){
//     return amount*curr;
// }

// function promotion(resalt){
//     console.log(resalt*discount);
// }

// promotion(convert (500, usdCurr));

