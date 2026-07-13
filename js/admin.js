// ===============================
// VERBUM - Painel Administrativo
// ===============================

const ebooks = [];

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".ebook-form");

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

       const titulo = document.getElementById("titulo").value.trim();

const categoria = document.getElementById("categoria").value;

const descricao = document.getElementById("descricao").value.trim();

const paginas = document.getElementById("paginas").value;

        if(titulo==="" || descricao==="" || paginas===""){

            alert("Preencha todos os campos.");

            return;

        }

        ebooks.push({

            titulo,
            categoria,
            descricao,
            paginas

        });

        atualizarTabela();

        document.getElementById("mensagem-sucesso").style.display="block";

        formulario.reset();

        setTimeout(()=>{

            document.getElementById("mensagem-sucesso").style.display="none";

        },3000);

    });

});

function atualizarTabela(){

    const tabela = document.getElementById("lista-ebooks");

    tabela.innerHTML="";

    ebooks.forEach((livro,index)=>{

        tabela.innerHTML+=`

<tr>

<td>${livro.titulo}</td>

<td>${livro.categoria}</td>

<td>${livro.paginas}</td>

<td>

<span class="action-btn">✏️</span>

<span class="action-btn" onclick="removerLivro(${index})">🗑️</span>

</td>

</tr>

`;

    });

}

function removerLivro(indice){

    ebooks.splice(indice,1);

    atualizarTabela();

}
