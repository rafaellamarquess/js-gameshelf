document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form"); // Acessa o formulário pelo ID

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Credenciais fixas para simulação
        const emailCorreto = "email@email.com";
        const senhaCorreta = "123";

        // Obtém valores dos campos
        const emailDigitado = document.querySelector("#email").value; // Acessa o campo de e-mail pelo ID
        const senhaDigitada = document.querySelector("#senha").value; // Acessa o campo de senha pelo ID

        // Verifica credenciais
        if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html"; // Redireciona para outra página fictícia
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});
