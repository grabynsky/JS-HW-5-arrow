// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => a * b;

console.log('Площа прямокутника з сторонами 10 на 20 дорівнює', rectangle(10, 20));
console.log('--------------------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circle = radius => Math.PI * Math.pow(radius, 2);

console.log('Площа кола з радіусом 4 дорівнює', Math.floor(circle(4)));
console.log('--------------------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinder = (h, r) => 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);

console.log('площу циліндру висотою 10, та радіутом 5 дорівнює', Math.floor(cylinder(10, 5)));
console.log('--------------------');

// - створити функцію яка приймає масив та виводить кожен його елемент

const arrElem = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log('Виводить кожний елемент масива');
arrElem([1, 2, 3, 4]);
console.log('--------------------');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph = text => document.write(`<p>${text}</p>`);

paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulLi = liText =>  document.write(`
        <ul>
          <li>${liText}</li>
          <li>${liText}</li>
          <li>${liText}</li>
        </ul>
    `);

ulLi('Lorem ipsum dolor sit amet');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulNumLi = (liText, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

ulNumLi('Lorem ipsum dolor sit amet', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arrElement = arr => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

arrElement([123, 'asd', 456, 789, 'qwerty']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const arrObject = objectsArray => {
    // for (let object of objectsArray) {
    //     document.write(`
    //         <div>
    //         <b>id:</b> ${object.id} <b>name:</b> ${object.name} <b>age:</b> ${object.age}
    //         </div>
    //         `);
    // }
    document.write(`<hr>`);
    for (let object of objectsArray) {
        for (const objKey in object) {
            document.write(`
            <p><b>${objKey}:</b> ${object[objKey]}</p>
            `);
        }
        document.write(`<hr>`);
    }
}

arrObject([
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Alice', age: 25},
    {id: 3, name: 'Bob', age: 35},
]);

// - створити функцію яка повертає найменьше число з масиву

const minElem = arrNum => {
    let min = arrNum[0];
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] < min) {
            min = arrNum[i];
        }
    }
    return min;
}

console.log('найменьше число з масиву [3,2,3,4,7,-1,-5]');
console.log(minElem([3, 2, 3, 4, 7, -1, -5]));
console.log('--------------------');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sumArr = arr => {
    let sum = 0;
    for (let arrEl of arr) {
        sum += arrEl;
    }
    return sum;
}

console.log('Сума елементів масиву [1,2,3,4,5]');
console.log(sumArr([1, 2, 3, 4, 5]));
console.log('--------------------');

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.error('Індекси виходять за межі масиву');
        return arr;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log('Функція міняє значення у відповідних індексах swap([11,22,33,44],1,2)', swap([11, 22, 33, 44], 1, 2))
console.log(swap([11, 22, 33, 44], 1, 2));
console.log('--------------------');

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if(currencyValues[i].currency === exchangeCurrency){
//           return +(sumUAH / currencyValues[i].value).toFixed(0);
//
//         }
//     }
// }
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    if (!exchangeCurrency) {
        return 'error-1'
    }

    for (let currencyValue of currencyValues) {
        if (!currencyValue.currency || !currencyValue.value) {
            return 'error-2'
        }
        if (currencyValue.currency === exchangeCurrency) {
            return +(sumUAH / currencyValue.value).toFixed(0);
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: '', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], ''));
