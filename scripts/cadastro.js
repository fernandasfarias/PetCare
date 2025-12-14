const form = document.getElementById('cadastroCliente');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cliente =  {
        dono:{
            nome: document.getElementById('nomeDono').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('tel').value,
            email: document.getElementById('email').value,
        },
        pet: {
            nome: document.getElementById('nomePet').value,
            especie: document.getElementById('especie').value,
            genero: document.getElementById('genero').value,
            idade: document.getElementById('idade').value,
            porte: document.getElementById('porte').value,
            comportamento: document.getElementById('comportamento').value,
        }
    };
    let clientes = JSON.parse(localStorage.getItem('clientes')) || []
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    alert('Cliente cadastrado com sucesso!');
    form.reset();
});