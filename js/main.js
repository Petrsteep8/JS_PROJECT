console.log("Скрипт загружен");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    
    const button = document.querySelector(".btn");
    const divhead = document.querySelector(".div-header");
    const name = document.querySelector(".name");
    console.log("Найдена кнопка:", button);
    
    if (button) {
        button.addEventListener('click', changeButton);
        button.addEventListener('click', function() {
            const main = document.querySelector(".main")
            main.style.backgroundColor = "white"
        })
        console.log("Обработчик события добавлен");
        button.addEventListener('click', moveButtonDown);
        button.addEventListener('click', moveDivDown);
        button.addEventListener('click', moveName);
    }

    function changeButton() {
        console.log("Клик по кнопке! Изменяю цвет...");
        this.style.color = "black";
        this.style.backgroundColor = "white";
        this.style.borderColor = "black";
        console.log("Стили применены:", this.style.color);
        this.textContent = "Следующая"
    }

    function moveButtonDown() {
        console.log("Перемещаю кнопку вниз...");
        const originalTransition = this.style.transition;
        this.style.transition = 'transform 0.5s ease, margin-top 0.5s ease';
        this.style.transform = 'translateY(500%)';
        console.log("Кнопка перемещена вниз");
    }

    function moveDivDown() {
        divhead.style.transition = 'height 0.5s ease';
        divhead.style.height = '15vh';
    }

    function moveName() {
        name.style.transition = 'all 0.5s ease';
        name.style.fontSize = '3rem';
        name.style.marginTop = '10px';
        name.style.marginLeft = '44%'
    }

    
});