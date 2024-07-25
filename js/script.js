"use sctrict"

let numberOfFilms;

function start(){

    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){

        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);

    }

}

start();

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    remeberMyFilms: function(){
        let i = 0;

    while (i< personalMovieDB.count ){
    
        let film = prompt("Один из последниъ прсомотренных фильмо?", 0);
        if (film.length == 0 || film.length > 50){
            prompt("Произошло что-то не так");
            continue;
            i--;
        }
        let degree = prompt("На сколько оцените его?", 0);
    
        personalMovieDB.movies[film] = degree;
    
        i++;
    }
    
    console.log(personalMovieDB);
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 0){
            alert("Произошла ошибка");
        }
        else if (personalMovieDB.count >= 0 && personalMovieDB.count < 10){
            alert("Слишком мало фильмов");
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        }
        else{
            alert("Вы киноман");
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i <= 2; i++){

            let answer = prompt(`Ваш любимый жанр? ${i}`, '');
            personalMovieDB.genres[i - 1] = answer;
    
        }
    },
    detectPrivat: function(){
        if (obj.privat == false){

            return obj;
    
        }
    }

}

