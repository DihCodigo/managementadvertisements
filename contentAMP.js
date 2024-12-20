console.log("Gerenciador de divs (AMP)");

const targetDiv = document.getElementById("target-div");

if (targetDiv) {
  const newDiv = document.createElement("div");
  newDiv.id = "new-content";
  newDiv.textContent = "Conteúdo inserido dinamicamente!";
  targetDiv.appendChild(newDiv);
} else {
  console.log("Elemento não encontrado.");
}
