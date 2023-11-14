/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Скольо фильмов вы уже посмотрели? ", "10");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скольо фильмов вы уже посмотрели? ", "10");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов? ", "Reptile"),
			b = prompt("На сколько оцените его? ", "9");
		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("Done");
		} else {
			console.log("Error");
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else console.log("Произошла ошибка");
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

//console.log(personalMovieDB);

function writeYourGenres() {
	for (let i=1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,"Drama");
	}
}

writeYourGenres();