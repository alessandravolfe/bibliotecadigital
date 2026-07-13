// ================================
// LOGIN ADMINISTRADOR - VERBUM
// ================================

const SENHA_ADMIN = "Verbum@2026";

const formulario = document.getElementById("adminLogin");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const senha = document.getElementById("senha").value;

    if(senha === SENHA_ADMIN){

        sessionStorage.setItem("adminLogado","true");

        window.location.href="adm.html";

    }else{

        document.getElementById("erro").style.display="block";

    }

});
