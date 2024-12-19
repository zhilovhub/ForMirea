const header1 = document.getElementById("header");
header1.addEventListener("mouseover", function(event) {
    this.classList.add("zoomOutActive");
})
header1.addEventListener("mouseleave", function(event) {
    this.classList.remove("zoomOutActive");
})

const paragraph = document.getElementsByTagName("p")[0];
paragraph.addEventListener("click", function(event) {
    this.classList.add("changeColorActive");
})

const showTableButton = document.getElementById("show_table");
showTableButton.addEventListener("click", function(event) {
    const elements = document.getElementsByClassName("practices_info");
    for (let i = 0;  i < elements.length; i++) {
        elements[i].classList.add("changeDisplayActive");
    }
})

const button = document.getElementById("swap_practices");
button.addEventListener("click", function(event) {
    button.setAttribute("disabled", "disabled");
    const topics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений",
    ]

    const trs = document.getElementById("practices_table").getElementsByTagName("tr");
    for (let i = 1; i < trs.length; i++) {
        trs[i].getElementsByTagName("td")[1].innerHTML = topics[i - 1];
    }
})
button.click();

const ava = document.getElementById("ava");

ava.addEventListener("mouseover", function(event) {
    this.classList.add("rotateActive")
})
ava.addEventListener("mouseleave", function(event) {
    this.classList.remove("rotateActive")
})

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.createElement("h2");
    text.innerHTML = "Форма отправлена!";
    text.classList.add("changeColorInfinityActive");
    
    document.body.appendChild(text);
});