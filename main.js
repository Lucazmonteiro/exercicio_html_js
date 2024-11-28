const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');

const campoAValue = Number (campoA.value);
const campoBValue = Number (campoB.value);
const mensagemSucesso = `Formulário valido. O número: ${campoBValue} é maior que o número: ${campoAValue}!`;
const mensagemError = `Invalido. O número: ${campoBValue} é igual ou menor que o número: ${campoAValue}!`

document.querySelector('.valido').innerHTML = '';
    document.querySelector('.invalido').innerHTML = '';


if (campoBValue > campoAValue) {
    document.querySelector('.valido').innerHTML = mensagemSucesso;

} else {
    document.querySelector('.invalido').innerHTML = mensagemError;
    }
});
