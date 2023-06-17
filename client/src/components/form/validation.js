export default function validation(input) {
    // input = { email:--, password: ---}
    
    const error = {};
    // error= { email: ERROR }

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email válido!";
    }
    if(!input.email) {
        error.email = "Debe ingresar un nombre!";
    }
    if(input.email.length > 35) {
        error.email = "No mayor a 35 caracteres!"
    }
    if(!regexPassword.test(input.password)) {
        error.password = "Al menos un número!";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Entre 6 y 10 caracteres!"
    }
    return error;
}