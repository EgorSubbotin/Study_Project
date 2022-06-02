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