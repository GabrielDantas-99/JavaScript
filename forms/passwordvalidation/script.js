let is_visible = false;
let input1 = document.getElementById("j_idt20:senha");
let input2 = document.getElementById("j_idt20:repetirSenha");
let oito, maiuscula, minuscula, especial, espacos, iguais = false;
let botao = document.getElementById("j_idt20:logar");
botao.setAttribute("disabled", "true")

function ver() {
  let word = document.getElementById("word");
  let ver = document.getElementById("icon");

  if (is_visible) {
    input1.type = 'password';
    input2.type = 'password';
    is_visible = false;
    word.textContent = "Ver Senha";
    ver.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input1.type = "text";
    input2.type = "text";
    is_visible = true;
    word.textContent = "Ocultar Senha";
    ver.classList.replace("fa-eye", "fa-eye-slash");
  }
}

function check() {
  /*Validações para aceitar nova senha*/
  let valor1 = input1.value;
  let valor2 = input2.value;
  validacao("check0", valor1.length >= 8) ? oito = true : oito = false;
  validacao("check1", /[A-Z]/.test(valor1)) ? maiuscula = true : maiuscula = false;
  validacao("check2", /[a-z]/.test(valor1)) ? minuscula = true : minuscula = false;
  validacao("check3", /\W|_/.test(valor1)) ? especial = true : especial = false;
  validacao("check4", !/\s/g.test(valor1) && (valor1.length > 0)) ? espacos = true : espacos = false;
  validacao("check5", (valor1 == valor2) && (valor1.length > 0)) ? iguais = true : iguais = false;
  checkFinalizar();
  // console.log(oito);
  // console.log(maiuscula);
  // console.log(minuscula);
  // console.log(especial);
  // console.log(espacos);
  // console.log(iguais);
}

function validacao(elemento, validacao) {
  elemento = document.getElementById(elemento);
  let finalizar = false;
  validacao ? finalizar = passou() : finalizar = naoPassou();

  function passou() {
    elemento.style.color = "#41d442";
    return true;
  }
  function naoPassou() {
    elemento.style.color = "#ca0606";
    return false;
  }
  return finalizar;
}

function checkFinalizar() {
  console.log(botao);
  let permissoes = [oito, maiuscula, minuscula, especial, espacos, iguais];
  if (!permissoes.includes(false)) {
    botao.removeAttribute("disabled");
    botao.classList.replace("disabled", "enabled");
  } else {
    botao.setAttribute("disabled", "true");
    botao.classList.replace("enabled", "disabled");
  }
}

function salvar() {
  window.location.href = "sucesso.html";
}
