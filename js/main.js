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
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	// проверяем чтобы пользователь не ввёл пустую строку или не отменил вопрос или не написал текст
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
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
		const a = prompt("Один из последних просмотренных фильмов?", ""),
			b = prompt("На сколько оцените его?", "");

		/* '!=' - не '&&' - и*/
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('Error');
			/* возвращаем цикл назад */
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

//(personalMovieDB.privat != true) можно заменить если задать аргумент функции например 'hidden'
// ! - отрицание
function showMyDB(hidden) {
	if (!hidden) {
		// Если база данных не скрыта то есть стоит False то мы показываем главный объект программы
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		// для того чтобы поставить номер по порядку нужно испольовать кавычки "бектики" на тильде
		// для того чтобы программа работала быстрее можно пропустить переменную "const genre = prompt(`Ваш любимый жанр под номером ${i}`);" и ставить вопрос напрямую 
		// так как цикл мы начинаем с 1 чтобы было удобно пользователю, то для цикла нужно начинать с 0 поэтому идёт выражение i - 1 
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();