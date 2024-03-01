//caso seleciona as criptografias, criar um input com o resultado
const state = {
    content: {
        conteudo: document.querySelectorAll(".contentPass .content-check"),
        tamanho: document.querySelectorAll(".SizePass .size-check"),
        cripto: document.querySelectorAll(".cript .cript-check"),
        password: document.querySelector(".gerador #senha")
    },
    value:{
        buttonGenerate: document.querySelector("#gerarPass")
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

function randomNumeral() {
    let numeroRandom = Math.floor(Math.random() * 10).toString()
    return numeroRandom;
}

function randomLetra() {
    let letraRandom = Math.floor(Math.random() * letras.length).toString()
    return letras[letraRandom]
}

function randomChar() {
    let charRandom = Math.floor(Math.random() * especiais.length).toString()
    return especiais[charRandom]
}


function gerar(numeros, letras, simbolos) {
    let password = "";
    let tamanho = 10;

    const conjunto = [numeros,letras,simbolos];


    for (let i = 0; i < tamanho; i=i+ conjunto.length) {
        conjunto.forEach(()=>{
            const randomValue = conjunto[Math.floor(Math.random() * conjunto.length)]();
            //coloca o parenteses no final por ser uma lista de funçoes
             password+=randomValue
        });
       
    }
   return password 
}


function init() {
    state.value.buttonGenerate.addEventListener("click",()=>{
        state.content.password.value = gerar(randomNumeral,randomLetra,randomChar);
       
       //console.log(randomChar)
    })
    
}
init();