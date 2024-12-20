console.log("Gerenciador de divs (AMP)");

// Função principal que adiciona a nova div
function addDynamicContent() {
  const targetDiv = document.getElementById("target-div");

  if (targetDiv) {
    const newDiv = document.createElement("div");
    newDiv.id = "new-content";
    newDiv.textContent = "Conteúdo inserido dinamicamente!";
    targetDiv.appendChild(newDiv);
    console.log("Div adicionada com sucesso.");
  } else {
    console.log("Elemento não encontrado.");
  }
}

// Executa a função automaticamente
addDynamicContent();
