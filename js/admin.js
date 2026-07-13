// ===============================
// VERBUM - Painel Administrativo
// ===============================

let ebooks = JSON.parse(localStorage.getItem("ebooks")) || [];

const formulario = document.querySelector(".ebook-form");
const tabela = document.getElementById("lista-ebooks");
const mensagem = document.getElementById("mensagem-sucesso");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const categoria = document.getElementById("categoria").value;
    const descricao = document.getElementById("descricao").value.trim();
    const paginas = document.getElementById("paginas").value;

    const livro = {

        titulo,
        categoria,
        descricao,
        paginas

    };

   ebooks.push(livro);

localStorage.setItem("ebooks", JSON.stringify(ebooks));

atualizarTabela();

    formulario.reset();

    mensagem.style.display = "block";

    setTimeout(()=>{

        mensagem.style.display = "none";

    },3000);

});

function atualizarTabela(){

    tabela.innerHTML="";

    ebooks.forEach((livro,indice)=>{

        tabela.innerHTML += `

        <tr>

            <td>${livro.titulo}</td>

            <td>${livro.categoria}</td>

            <td>${livro.paginas}</td>

            <td>

                <button onclick="excluirLivro(${indice})">

                    🗑️

                </button>

            </td>

        </tr>

        `;

    });

}

function excluirLivro(indice){

    ebooks.splice(indice,1);

    localStorage.setItem("ebooks", JSON.stringify(ebooks));

    atualizarTabela();

}

atualizarTabela();
