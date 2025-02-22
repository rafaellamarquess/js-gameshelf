document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailCorreto = "email@email.com";
        const senhaCorreta = "123";

        // Obtém valores dos campos
        const emailDigitado = document.querySelector("#email").value;
        const senhaDigitada = document.querySelector("#senha").value;

        // Verifica credenciais
        if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});
