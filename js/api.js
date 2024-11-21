window.onload = function() {
    const campoCEP = document.getElementById('txtCep');

    campoCEP.addEventListener('blur', function() { // Perda de foco do campo CEP

        const caixaCEP = campoCEP.value;

        if (caixaCEP.length === 8) {  // Verifica se o CEP tem 8 caracteres
            const urlCEP = `https://viacep.com.br/ws/${caixaCEP}/json/`;

            fetch(urlCEP)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if (!data.erro) { // Verifica se o CEP é válido
                        document.getElementById('txtRua').value = data.logradouro || '';
                        document.getElementById('txtBairro').value = data.bairro || '';
                    } else {
                        alert('CEP não encontrado!');
                    }
                })
                .catch(function(error) {
                    alert('Erro ao buscar o CEP. Tente novamente.');
                    console.error(error);
                });
        }
    });
};
