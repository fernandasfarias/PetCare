console.log('auth.js carregado!');

// selecionar o formulário
const form = document.querySelector('.login-form');
// selecionar os inputs e mensagem de erro
const emailInput = document.getElementById('email-usuario');
const senhaInput = document.getElementById('senha-usuario');
const erroLogin = document.getElementById('erro-login');

// ler arquivo funcionarios.json
form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita recarregamento da página
    fetch('json/funcionarios.json')
        .then(res => res.json())
        .then(funcionarios => {
            // capturar valores de entrada
            const email = emailInput.value;
            const senha = senhaInput.value;

            // verificando se o usuário existe
            const funcionario = funcionarios.find(f => f.email === email && f.senha === senha);

            if (funcionario) {
                // redirecionar para a página dashboard.html
                window.location.href = 'pages/dashboard.html';
            } else {
                // mostrar mensagem de erro
                erroLogin.textContent = 'Email ou senha inválidos';
                erroLogin.style.display = 'block';
            }
        })
        .catch(err => {
            console.error('Erro ao carregar JSON:', err);
            erroLogin.textContent = 'Erro ao carregar dados. Tente novamente.';
            erroLogin.style.display = 'block';
        });
});
