function focoT() {
  if (t.innerText.trim() === "Título") {
    t.innerText = "";
    t.className = "temTitulo";
  }
}

function semFocoT() {
  if (t.innerText.trim() === "") {
    t.innerText = "Título";
    t.className = "padraoTitulo";
  }
}

function focoP() {
  if (p.innerHTML.trim() === "<em>Escreva seu poema</em>") {
    p.innerText = "";
  }
}

function semFocoP() {
  if (p.innerText.trim() === "") {
    p.innerHTML = "<em>Escreva seu poema</em>";
    p.className = "padraoTexto";
  }
}

bttPub.onclick = () => {
  if (estado === "on") {
    return true;
  } else if (estado === "off") {
    location.assign("login.html");
    return false;
  }
};
