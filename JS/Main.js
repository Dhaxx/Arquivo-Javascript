 
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/kaio-martins-6319741b0/");
    //window.location.href = "https://www.linkedin.com/in/kaio-martins-6319741b0/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*var nome = "Kaio Pablo";
var n1 = 18;
var n2 = 3;
var frase = "Naruto mais forte que todos";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 / n2);
console.log(frase.toUpperCase());
*/
/*
var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("Uva")
//lista.pop();

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var fruta = {nome:"Maçã", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var idade = prompt("Qual sua idade: ");
if (idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var count 
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth()+1);
*/
/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/
/*
function validaidade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Digite sua idade: ")
validaidade(idade)
console.log(validaidade(idade))
*/
