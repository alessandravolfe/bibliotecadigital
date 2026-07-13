// ======================================
// VERBUM - Biblioteca
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const livros = JSON.parse(localStorage.getItem("ebooks")) || [];

    const grid = document.getElementById("biblioteca-grid");

    if (!grid) return;

    grid.innerHTML = "";

    if (livros.length === 0) {

        grid.innerHTML = `
            <p style="text-align:center;width:100%;padding:40px;">
                Nenhum eBook disponível.
            </p>
        `;

        return;

    }

    livros.forEach((livro) => {

        grid.innerHTML += `

        <div class="book-card">

            <div class="book-cover">

                📘

            </div>

            <div class="book-info">

                <span class="category">

                    ${livro.categoria}

                </span>

                <h3>

                    ${livro.titulo}

                </h3>

                <p>

                    ${livro.paginas} páginas

                </p>

                <a href="leitor.html" class="btn-read">

                    Ler Agora

                </a>

            </div>

        </div>

        `;

    });

});
