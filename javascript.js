const codigo = document.getElementById("mostrarCepAnterior");
let cep = 'key-1';
function exibir(valor){
    localStorage.setItem(cep, valor);
    codigo.innerHTML = localStorage.getItem(cep, valor);
}
