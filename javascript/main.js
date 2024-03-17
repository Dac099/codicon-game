const inputNombre = document.getElementById('nombre');
const aviso = document.querySelector('.aviso')
const loginBtn = document.getElementById('loginBtn');

let isUserValid = false;

inputNombre.addEventListener('input', function () {
    const nombre = inputNombre.value.trim();
    const regex = /^.{4,14}$/;
    
    if (regex.test(nombre)) {
        inputNombre.classList.remove('invalid');
        inputNombre.classList.add('valid');
        aviso.classList.add('hidden')
        aviso.classList.remove('blick')

        localStorage.setItem('userName', nombre);
        isUserValid = true;
    } else {
        inputNombre.classList.remove('valid');
        inputNombre.classList.add('invalid');
        aviso.classList.add('block')
        aviso.classList.remove('hidden')
    }
});


loginBtn.addEventListener('click', () => {
    if(isUserValid){
        window.location.href = '../html/main.html';
    }
});