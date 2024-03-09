const state = {
    content: {
        password: document.querySelector(".gerador #senha")
    },
    actions: {
        buttonGenerate: document.getElementById("gerarPass")
    },
}
const especiais = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "¬",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "§",
    "|",
    "<",
    ">",
    ":",
    ";",
    "?",
    "/",
    "}",
    "{",
    ",",
    ".",
]
const letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

/**
 * 
 * Gera valores de forma aleatoria
 * 
 */
function randomNumeral() {
    let numeroRandom = Math.floor(Math.random() * 10).toString()
    return numeroRandom;
}

function randomLetra() {
    let letraRandom = Math.floor(Math.random() * letras.length).toString()
    return letras[letraRandom]
}
function randomLetraUpper() {
    return randomLetra().toUpperCase()
}

function randomChar() {
    let charRandom = Math.floor(Math.random() * especiais.length).toString()
    return especiais[charRandom]
}

/**
 * 
 * Checa se o tamanho foi acionado(marcado como checked) 
 * 
 * Checa o conteudo add (que foi checked)
 * 
 */

function tamanhoCheck() {
    let T8 = document.getElementById(`8`)
    let T16 = document.getElementById(`16`)
    let T25 = document.getElementById(`25`)
    let T32 = document.getElementById(`32`)
    let T64 = document.getElementById(`64`)

    if (T8.checked) {
        if (T8.value === T8.id) return T8.id
    }
    if (T16.checked) {
        if (T16.value === T16.id) return T16.id
    }
    if (T25.checked) {
        if (T25.value === T25.id) return T25.id
    }
    if (T32.checked) {
        if (T32.value === T32.id) return T32.id
    }
    if (T64.checked) {
        if (T64.value === T64.id) return T64.id
    }
}
function conteudoCheck() {
    //coleta os itens que estao checked
    // verifica se corresponde se oq esta checked corresponde a alguma funcao, caso sim, retorna a funcao

    let numero = document.getElementById("numeros")
    let maiuscula = document.getElementById("maiuscula")
    let minuscula = document.getElementById("minuscula")
    let outros = document.getElementById("outros")
    let conteudo = [];
    
    if(numero.checked){
        if(numero.value === numero.id) conteudo.push(randomNumeral) 
    }
    if(maiuscula.checked){
        if(maiuscula.value === maiuscula.id) conteudo.push(randomLetraUpper)
    }
    if(minuscula.checked){
        if(minuscula.value === minuscula.id) conteudo.push(randomLetra)
    }
    if(outros.checked){
        if(outros.value === outros.id) conteudo.push(randomChar)
    }

    return conteudo
}
/**
 * 
 * Função que gera o senha
 * 
 */
function gerar(conteudo, tamanho) {
    let password = "";
    //let tamanho = parseInt(tamanhoCheck());

    for (let i = 0; i < tamanho; i++) {
        const randomFunction = conteudo[Math.floor(Math.random() * conteudo.length)];
        password += randomFunction();
    }
    //return password.toString().split(",")
    return password
}


function init() {
    state.actions.buttonGenerate.addEventListener("click",()=>{
        let tamanho = parseInt(tamanhoCheck());
        let conteudo = conteudoCheck()
        state.content.password.value = gerar(conteudo,tamanho);
    })
}
init();