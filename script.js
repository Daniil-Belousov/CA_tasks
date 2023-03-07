const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirm_password = document.querySelector('#confirm_password').value;

    const condition = validation(EMAIL_REGEXP, email) && password.length >= 8 && confirm_password === password && password !== password.toLowerCase() && name.trim().length

    if (condition) {
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        message.style.color = 'green';
        message.textContent = 'Регистрация прошла успешно!';
        setTimeout(() => message.textContent = '', 3000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Некорректные данные!';
    }
});

window.addEventListener('load', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.querySelector('#name').value = user.name;
        document.querySelector('#email').value = user.email;
        document.querySelector('#password').value = user.password;
    }
});

function validation(regexp, value) {
  return regexp.test(value);
}