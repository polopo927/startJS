
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		// проверяем чтобы пользователь не ввёл пустую строку или не отменил вопрос или не написал текст
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	//(personalMovieDB.privat != true) можно заменить если задать аргумент функции например 'hidden'
	// ! - отрицание
	showMyDB: function (hidden) {
		if (!hidden) {
			// Если база данных не скрыта то есть стоит False то мы показываем главный объект программы
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			// для того чтобы поставить номер по порядку нужно испольовать кавычки "бектики" на тильде
			// для того чтобы программа работала быстрее можно пропустить переменную "const genre = prompt(`Ваш любимый жанр под номером ${i}`);" и ставить вопрос напрямую 
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			//если ответ пользователя будет пустая строка или он отменит вопрос, то в консоль выведется 'вы ввели некорректные данные'
			if (genre == '' || genre == null) {
				console.log('вы ввели некорректные данные');
				// в таком случае вернём пользователя обратно на этот же вопрос с помощью отнимем от цикла 1
				i--;
			} else {
				// так как цикл мы начинаем с 1 чтобы было удобно пользователю, то для цикла нужно начинать с 0 поэтому идёт выражение i - 1
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};

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



