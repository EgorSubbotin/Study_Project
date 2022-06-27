"use strict";

const lMovieDB= {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:function () {
        lMovieDB.count=+prompt('Сколько фильмов Вы уже посмотрели?','');
        while (lMovieDB.count==''|| lMovieDB.count == null || isNaN(lMovieDB.count)){
            lMovieDB.count=+prompt('Сколько фильмов Вы уже посмотрели?','');
        }
    },

    rememberMyFilm: function (){
        for (let i=0; i<2; i++){
            const a=prompt('Один из последних просмотренных фильмов?' ,'').trim(),
                  b=prompt('На сколько оцените его?' ,'');
             if (a==''|| b== '' || a==null || b==null || a.length>50){
                      i--;
                      console.log ('Error');
             } else {
                    lMovieDB.movies[a]=b;
                    console.log('Done');
             }
        }
    },

    detectPersonalLevel: () => {
        if (lMovieDB.count<10){
            console.log('Просмотрено мало фильмов');
        }else if (lMovieDB.count>=10 && lMovieDB.count<30){
            console.log('Классический зритель');
        }else if (lMovieDB.count>=30){
            console.log('Киноман');
        }else {
            console.log('Ошибка');
        }        
    },

    showMyDB: function (hidden){
        if (!hidden){
            console.log(lMovieDB);
        }
    },

    writeYourGenres:()=>{
        for (let i=1; i<4; i++){
            lMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
            if(lMovieDB.genres[i-1]==''|| lMovieDB.genres[i-1]==null){
                i--;
            }
        }
        lMovieDB.genres.forEach((element, i) => {
            // let j=1;
            console.log(`Любимый жанр ${[i+1]} - ${element}`);
        });        
    },

    toggleVisibleMyDB: ()=>{
        if (!lMovieDB.privat){
            lMovieDB.privat=true;
        }else {
            lMovieDB.privat=false;
        }
    }
};

// console.log(lMovieDB.privat);
// lMovieDB.toggleVisibleMyDB();
// lMovieDB.rememberMyFilm();
// console.log(lMovieDB.privat);
