// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// const pow = function (x, n) {
//   return Math.pow(x, n);
// };
// console.log(pow(2, 4));
// ==========

// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const addNumbers = function (numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     numbers[i] += numbers[i + 1];
//     newNumbers.push(numbers[i]);
//   }
//   return newNumbers;
// };

// console.log(addNumbers([22, 11, 34, 5, 12, 13, 14, 15]));

// ===================

// TASK 4
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный
//  корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];

// const addNewArr = (array) => {
//   const newArr = [];
//   for (let elem of array) {
//     if (elem % Math.sqrt(elem) === 0) {
//       newArr.push(Math.sqrt(elem));
//     }
//   }
//   return newArr;
// };
// console.log(addNewArr(arr));

// ========================

// TASK 6

// даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// // Напишите функцию которая будет принимать 2 массива в качестве аргументов
// // и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// const array = (array1, array2) => {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     typeof array1[i] === "number"
//       ? newArray.push(array1[i] + array2[i])
//       : newArray.push(array2[i] + array1[i]);
//   }

//   return newArray;
// };
// console.log(array(nums, strs));
// //
// ==================

// TASK какой-то
// привести массив к одному уровню
// [23, 11, "hello", "world", "Vasya", "some str", 777, "word", "Привет", "как сюда добраться"]

// const tryThis = [
// 	[23, 11, ["hello", "world", "Vasya"]],
// 	"some str",
// 	[777, "word", ["Привет", ["как сюда добраться"]]],
//   ];

// console.log(tryThis.flat(Infinity));
// //   ххххххххххххххххххх   или     хххххххххххххх
//    console.log(newTryThis.join(' ').split(' '))

// const user = {
//     name: 'John',
//     age: 23,
//     surname: 'Smith',
// };

// Object.defineProperty(user, "age", {
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });

// for (let key in user) {
//     console.log(key);
// }

// const user2 = { ...user };
// console.log(user2);
// console.log(user);
// const user3 = Object.assign({}, user);
// const4 = JSON.parse(JSON.stringify(user))

// const user = {
//     name: 'John',
//     age: 23,
//     surname: 'Smith',

// };

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function(employees) {
// let totalSalary = 0;
// const salary = Object.values(employees);
// for (let value of salary) {

//  totalSalary += value;
// }
// return totalSalary
// };

// const countTotalSalary = (employees) => Object.values(employees).reduce((acc, el) => acc + el, 0);

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function(employees) {
// 	const values = Object.values(employees);
// 	const max = Math.max(...values);
// 	console.log(max);
// 	for (let key in employees) {
// 		if (employees[key] === max) {
// 			return key;
// 		}
// 	}
// };
// // или
// const findBestEmployee = (employees) =>
//   Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена * количество).
// // Вызовы функции для проверки работоспособности твоей реализации.
// const products = [{ name: 'Радар', price: 1300, quantity: 4 },
// 	{ name: 'Сканер', price: 2700, quantity: 3 },
// 	{ name: 'Дроид', price: 400, quantity: 7 }, { name: 'Захват', price: 1200, quantity: 2 },];
// const calculateTotalPrice = function (allProdcuts, productName) {
// 	твой код   let totalPrice = 0; for (const product of allProdcuts) {
// 		if (product.name === productName) { return product.price * product.quantity; }
// 	}
// };  /*  * Вызовы функции для проверки работоспособности твоей реализации.  */ console.log(calculateTotalPrice(products, 'Радар'));
// // 5200  console.log(calculateTotalPrice(products, 'Дроид')); // 2800
