document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Credenciais fixas para simulação
        const emailCorreto = "email@email.com";
        const senhaCorreta = "123";

        // Obtém valores dos campos
        const emailDigitado = form.querySelector('input[type="email"]').value;
        const senhaDigitada = form.querySelector('input[type="password"]').value;

        // Verifica credenciais
        if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html"; // Redireciona para outra página fictícia
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});