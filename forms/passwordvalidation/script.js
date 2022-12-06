let is_visible = false;
let oito, maiuscula, minuscula, especial, espacos, iguais = false;

function ver() {
  let input = document.getElementById("password");
  let word = document.getElementById("word");
  let ver = document.getElementById("icon");

  if (is_visible) {
    input.type = 'password';
    is_visible = false;
    word.textContent = "Ver Senha";
    ver.innerHTML = "visibility"
  }
  else {
    input.type = "text";
    is_visible = true;
    word.textContent = "Ocultar Senha";
    ver.innerHTML = "visibility_off"
  }
}

function check() {
  /*Validações para aceitar nova senha*/
  let input = document.getElementById("password").value;
  let input2 = document.getElementById("r_password").value;

  validacao("check0", input.length >= 8) ? oito = true : oito = false;
  validacao("check1", /[A-Z]/.test(input)) ? maiuscula  = true : maiuscula  = false;
  validacao("check2", /[a-z]/.test(input)) ? minuscula  = true : minuscula  = false;
  validacao("check3", /\W|_/.test(input)) ? especial  = true : especial  = false;
  validacao("check4", !/\s/g.test(input) && (input.length > 0)) ? espacos  = true : espacos  = false;
  validacao("check5", (input == input2) && (input.length > 0)) ? iguais  = true : iguais  = false;
  console.log("----------")
  console.log(oito);
  console.log(maiuscula);
  console.log(minuscula);
  console.log(especial);
  console.log(espacos);
  console.log(iguais);
  finalizar();
}

function validacao (elemento, validacao) {
  elemento = document.getElementById(elemento);
  let finalizar = false;
  validacao ? finalizar = passou() : finalizar = naoPassou();
  function passou() {
    elemento.style.color="#41d442";
    return true;
  }
  function naoPassou() {
    elemento.style.color="#ca0606";
    return false;
  }
  return finalizar;
}

function finalizar() {
  let botao = document.getElementById("j_idt20:logar");
  
  let permissoes = [oito, maiuscula, minuscula, especial, espacos, iguais];
  console.log("---" + permissoes.includes(false));
  !permissoes.includes(false) ? botao.classList.replace("disabled", "enabled") : botao.classList.replace("enabled", "disabled");
}