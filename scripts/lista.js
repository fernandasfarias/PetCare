console.log("JS da listagem está rodando"); // teste

function listarClientes() {
  let clientes = localStorage.getItem("clientes");
  clientes = JSON.parse(clientes); // convertendo de JSON para obj
  const tabela = document.getElementById("listaClientes"); // onde os dados vão aparecer
  tabela.innerHTML = ""; // limpando a tabela

  // caso não tenha nenhum cliente cadastrado
  if (!clientes || clientes.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="3">Nenhum cliente cadastrado</td>
      </tr>
    `;
    return;
  }

  clientes.forEach(cliente => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${cliente.dono.nome}</td>
      <td>${cliente.dono.telefone}</td>
      <td>${cliente.pet.nome}</td>
    `;

    tabela.appendChild(linha);
  });
}

listarClientes();