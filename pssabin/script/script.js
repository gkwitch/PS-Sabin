const ancNav = document.querySelector(".containernav nav");
const bttEnv = document.querySelector(".envieaqui a");
const bttPub = document.getElementById("pub");
let estado = localStorage.getItem("log");

if (estado === "on") {
  ancNav.innerHTML = `<a class="equipe" href="equipe.html">EQUIPE</a>
    <a class="escrevaaqui" href="escreva.aqui.html">ESCREVA AQUI</a>
    <a class="perfil" href="perfil.html">PERFIL</a>`;
} else if (estado === "off") {
  ancNav.innerHTML = `<a class="equipe" href="equipe.html">EQUIPE</a>
    <a class="escrevaaqui" href="escreva.aqui.html">ESCREVA AQUI</a>
    <a class="login" href="login.html">LOGIN</a>`;
}
