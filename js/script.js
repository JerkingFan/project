"use sctrict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    priva: false

}

if (personalMovieDB.count < 0){
    alert("Произошла ошибка");
}
else if (personalMovieDB.console >= 0 && personalMovieDB.count < 10){
    alert("Слишком мало фильмов");
}
else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель");
}
else{
    alert("Вы киноман");
}

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

console.log(personalMovieDB)
