"use sctrict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    priva: false

}

let i = 0;

let movies = {




}

while (i< personalMovieDB.count ){

    let film = prompt("Один из последниъ прсомотренных фильмо?", 0);
    let degree = prompt("На сколько оцените его?", 0);

    personalMovieDB.movies[film] = degree;

    i++;
}

console.log(personalMovieDB)
