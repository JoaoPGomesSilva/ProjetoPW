document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();

    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuarios.find(user => user.cpf === cpf || user.email === email);

    if (usuarioExistente) {
        alert("CPF ou E-mail já cadastrado!");
    } else {
        
        usuarios.push({ nome, cpf, email });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Cadastro realizado com sucesso!");
        
        
        this.reset();
    }
});
