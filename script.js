const div = document.getElementById("caixa")
const adicionar = document.getElementById("botao-adicionar")
const limpar = document.getElementById("botao-limpar")
let tarefas = [];



adicionar.addEventListener("click", () => {
    const valor = add.value;
    if(valor === ""){
        alert("Digite algum valor!")
    } else{
    const li = document.createElement("li")
    li.innerText = valor;
    lista.appendChild(li)
    add.value = ""
}})
