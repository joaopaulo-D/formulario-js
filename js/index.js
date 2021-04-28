var nome = document.getElementById('nome');
var email = document.getElementById('email');
var password = document.getElementById('password');

nome.addEventListener('focus', () => {
    nome.style.borderColor = "#4a5f6a";
});

nome.addEventListener('blur', () => {
    nome.style.borderColor = '#ccc';
});

email.addEventListener('focus', () => {
    email.style.borderColor = "#4a5f6a";
});

email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc';
});

password.addEventListener('focus', () => {
    password.style.borderColor = "#4a5f6a";
});

password.addEventListener('blur', () => {
    password.style.borderColor = '#ccc';
});
