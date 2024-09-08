const ancNav = document.querySelector(".containernav nav");
const bttEnv = document.querySelector(".envieaqui a");
const bttEnv2 = document.querySelector(".containerbuttonqueroenviar a");
const bttPub = document.getElementById("pub");
let estado = localStorage.getItem("log");

if (estado === "on") {
  ancNav.innerHTML = `<ul>
            <li><a class="navequipe" href="equipe.html">EQUIPE</a></li>
            <li>
              <a id="escAqAnc" class="navescreva" href="escreva.aqui.html">ESCREVA AQUI</a>
            </li>
            <li><a class="perfil" href="perfil.html">PERFIL</a></li>
          </ul>`;
} else if (estado === "off") {
  ancNav.innerHTML = `<ul>
            <li><a class="navequipe" href="equipe.html">EQUIPE</a></li>
            <li>
              <a id="escAqAnc" class="navescreva" href="escreva.aqui.html">ESCREVA AQUI</a>
            </li>
            <li><a class="navlogin" href="login.html">LOGIN</a></li>
          </ul>`;
  document.getElementById("escAqAnc").onclick = () => {
    if (estado === "on") {
      return true;
    } else if (estado === "off") {
      location.assign("login.html");
      return false;
    }
  };
}
