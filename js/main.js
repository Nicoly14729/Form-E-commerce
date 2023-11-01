/*Bloco de verificaçao de preenchimento de campos*/
 
function Validar() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = document.getElementById('data').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('Bairro').value;
    let cidade = document.getElementById('Cidade').value;
    let estado = document.getElementById('Estado').value;
    let repetirsenha = document.getElementById('RepetirSenha').value;
 
    if (!nome || !senha || !email || !telefone || !data || !cpf || !endereco || !numero || !bairro || !cidade || !estado || !repetirsenha) {
        alert("Campos de preenchimento obrigatorio. favor preencher!");
    } else {
        alert("Campos preenchidos com sucesso!");
    }
}
 
'use strict'; //Modo restrito
 
//Função para limpar formulario
// Arrow function
const limparformulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
 
//Responsavel pelo preenchimento do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
 
// Função para consumo de API da Via CEP
const pesquisaCep = async() => {
    limparformulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar
        const address = await dados.json(); //retorna dados no formato JSON
 
        if(address.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherFormulario(address);
            }
        }else{
            alert('CEP incorreto');
        }
    }
 
    //Adiciona um evento DOM no input do CEP
    document.getElementById('cep').addEventListener('focusout', pesquisarCep)