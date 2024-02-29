//caso seleciona as criptografias, criar um input com o resultado
//import MD5 from "crypto-js/md5";

const state = {
    content:{
        conteudo: document.querySelectorAll(".contentPass .content-check"),
        tamanho: document.querySelectorAll(".SizePass .size-check"),
        cripto: document.querySelectorAll(".cript .cript-check"),
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
const numeral = [
    0,
    1,
    2,
    4,
    5,
    6,
    7,
    8,
    9
];

function randomChar(){
    let randomNumber = Math.floor(Math.random() * numeral.length)
    let randomLetras = Math.floor(Math.random() * letras.length)
    let randomChar = Math.floor(Math.random() * especiais.length)

    return letras[randomLetras]+numeral[randomNumber]+especiais[randomChar];

    
}



function gerar(){
    let palavra = '';
    for(let i=0;i < 8;i++){
        palavra = randomChar();
        
    }
    console.log(palavra)
}


function init(){
    gerar();
}
init();