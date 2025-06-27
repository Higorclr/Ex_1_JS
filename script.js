// Esta é a função que o botão no HTML vai chamar
function iniciarCalculo() {
    let quantTxt = prompt("Quantos números você quer calcular?");
    let quantidade = parseInt(quantTxt);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Valor inválido! Por favor, inicie novamente e digite um número maior que 0.");
        return;
    }

    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        
        let numeroTexto = prompt("Digite o " + i + "º número:");

        let numero = parseFloat(numeroTexto);

        if (isNaN(numero)) {
            alert("Você não digitou um número. O cálculo foi cancelado. Tente de novo.");
            return;
        }

        soma = soma + numero;
    }

    let media = soma / quantidade;

    alert("O cálculo terminou!\n\nA soma de todos os números foi: " + soma + "\nA média final é: " + media.toFixed(2));
}
