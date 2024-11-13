const taskFirst = document.querySelector(".task__first");
const taskSecond = document.querySelector(".task__two");
const taskSecondWrapper = document.querySelectorAll(".task__two-wrapper .list__element");
const taskThree = document.querySelector(".task__list_three-task");
const taskTodoButton = document.querySelector(".task__todo button");
const taskTodoInput = document.querySelector(".task__todo input");
const taskTodoWrapper = document.querySelector(".task__list.task__four");
const taskCurrentDate = document.querySelector(".task__current-date");
const taskCurrentTime = document.querySelector(".task__current-time");
/* 
    Задание 1. Выведите с помощью модального окна надпись "Hello World" 
*/

taskFirst.addEventListener("click", () => {
    // используйте alert() для решение первой задачи
});

/*
    Задание 2. Вычислите выражение с помощью JavaScript
*/

let sum; // реализуйте операцию сумму
let minus; // реализуйте операцию минус
let multi; // реализуйте операцию умножение
let div; // реализуйте операцию деление

taskSecond.addEventListener("click", () => {
    const mainOperations = [sum, minus, multi, div];

    for (let i = 0; i < taskSecondWrapper.length; i++) {
        taskSecondWrapper[i].textContent += ` ${mainOperations[i]}`;
    }
});

/* 
    Задание 3. Исправьте и укажите правильные цвета с помощью условных конструкции:
*/

const COLORS = {
    red: "Красный",
    yellow: undefined,
    green: undefined,
    blue: undefined,
}; // замените undefined на нужное значение

taskThree.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        const rectClasses = Array.from(event.target.classList);
        if (rectClasses.includes(Object.keys(COLORS)[0])) {
            alert(COLORS["red"]);
        }
        if (rectClasses.includes(Object.keys(COLORS)[1])) {
            alert(); //допишите код
        }
        // сделайте вывод для остальных цветов
    }
});

/*
    Задание 4. Исправьте программу, чтоб можно добавлять и выводить на экран список покупок
*/

taskTodoButton.addEventListener("click", (event) => {
    event.preventDefault();

    let listElement = document.createElement(""); // добавьте необходимый элемент
    listElement.classList.add("list__element");
    listElement.textContent = taskTodoInput; // <-- Здесь ошибка, подумай, что не так
});

/*
    Задание 5. Исправьте программу, чтоб выводилось на экран текущая время и дата.
*/

//Текущая дата
let date = new Date();

//taskCurrentDate.textContent += ` ${date.}.${date.}.${date.}`; // допишите необходимые методы для вывода на экран текущей даты

//Текущее время
setInterval(() => {
    let time = new Date();
    taskCurrentTime.textContent = `Текущее время: `;
}, 1000);
