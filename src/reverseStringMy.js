export function reverseStringMy(str) {

    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
};

export function getMonth(n) {
    if (n === 0) return '0 не может быть месяцем';
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
  return 'неизвестно';
};
 
export function repeatWord(word, num) {
	let words = '';
  for (let i = 1; i <= num; ++i) {
  	words += word + i + ', ';
  }
  return words;
};

export function getPercents(percent, number) {
	let result = number / 100 * percent;
    return result;
};
