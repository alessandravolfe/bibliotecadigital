// ==============================
// VERBUM - Painel Administrativo
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".ebook-form");

    if (!formulario) return;

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const titulo = formulario.querySelector('input[type="text"]').value.trim();

        const categoria = formulario.querySelector("select").value;

        const descricao = formulario.querySelector("textarea").value.trim();

        const paginas = formulario.querySelector('input[type="number"]').value;

        if (
            titulo === "" ||
            descricao === "" ||
            paginas === ""
        ) {

            alert("Preencha todos os campos obrigatórios.");

            return;

        }

        alert("✅ eBook cadastrado com sucesso!");

        formulario.reset();

    });

});
