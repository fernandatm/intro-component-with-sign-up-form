//  a validação do formato do email ainda não está dando certo, rever REGEX
function validateEmail(inputId, errorId) {
    const input = document.getElementById(inputId);
    const email = input.value;
    const emailFormat = /[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*/;
    const errorSpan = document.getElementById(errorId);
    if (emailFormat.test(email) !== true) {
        input.classList.add('inputError');
        errorSpan.removeAttribute('hidden');
        var emailErrorMessage = "Looks like this is not an email";
        errorSpan.innerHTML = emailErrorMessage;
    } else {
        errorSpan.setAttribute('hidden', 'hidden');
    }
}

function error(inputId, errorId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const errorSpan = document.getElementById(errorId);
    if (inputValue === '') {
        input.classList.add('inputError');
        errorSpan.removeAttribute('hidden');
        var inputName = errorSpan.innerHTML;
        inputName = inputName + ' cannot be empty';
        errorSpan.innerHTML = inputName;
    } else {
        errorSpan.setAttribute('hidden', 'hidden');
    }

}