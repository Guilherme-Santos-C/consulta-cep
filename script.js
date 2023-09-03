const input = document.getElementById("inputCep");
const button = document.getElementById("buttonCep");
const cardInfo = document.getElementById("card_cep_info");


button.addEventListener("click", () => {
axios.get(`https://viacep.com.br/ws/${input.value}/json/`)
.then((response) => {
if(response.data.logradouro != undefined){
cardInfo.innerHTML = `
<h4 class="text-dark">Logradouro: ${response.data.logradouro}</h4>
<h4 class="text-dark">Bairro: ${response.data.bairro}</h4>
<h4 class="text-dark">Cidade: ${response.data.localidade}</h4>
`;
}
else{
alert("Endereço não encontrado")
input.value = "";
}
})
.catch((response) => {
alert("Cep inválido");
input.setAttribute("placeholder", "exemplo 00000-000")
input.value = "";
})
})
