const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


const EncrypButton = document.getElementById('Encryp');
const DecrypButton = document.getElementById('Decryp');
const containerExp = document.getElementById('container-exp'); 

EncrypButton.addEventListener('click', () => {
    containerExp.classList.add("right-panel-active");
});

DecrypButton.addEventListener('click', () => {
    containerExp.classList.remove("right-panel-active");
});
