"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}


//Пропадає плейсхолдер при фокусі на форму з імям subscribeForm в полі з імям subscribeInput
const subscribeForm = document.forms.subscribeForm;
const subscribeFormInput = subscribeForm.subscribeInput;
const subscribeFormInputPlaceholder = subscribeFormInput.placeholder;

subscribeFormInput.addEventListener("focus", function (e) {
    subscribeFormInput.placeholder = "";
});
subscribeFormInput.addEventListener("blur", function (e) {
    subscribeFormInput.placeholder = subscribeFormInputPlaceholder;
});

// Перевіряєм чи коректний емейл
subscribeForm.addEventListener("submit", function (event) {
    if (emailTest(subscribeFormInput)) {
        subscribeFormInput.parentElement.insertAdjacentHTML(
            "afterbegin",
            `<div style="color: red;" class="main-form__error">
            enter valid email
            </div>`
        );
        event.preventDefault();
    }

    subscribeFormInput.addEventListener("focus", function (event) {
        if (subscribeFormInput.previousElementSibling) {
            subscribeFormInput.previousElementSibling.remove();
        }
    });
});

// Функція тесту email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};
