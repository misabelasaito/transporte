function calcularCusto() {
    let numFuncionarios = parseInt(document.getElementById("numFuncionarios").value);
    let diasUteis = parseInt(document.getElementById("diasUteis").value);
    let valorPessoa;

    if (numFuncionarios >= 150) {
        valorPessoa = 3.60;
    } else if (numFuncionarios >= 100) {
        valorPessoa = 3.80;
    } else if (numFuncionarios >= 50) {
        valorPessoa = 4.10;
    } else {
        valorPessoa = 4.50;
    }

    let custoDiario = numFuncionarios * valorPessoa; 
    let custoTotal = custoDiario * diasUteis;

    document.getElementById("valorPessoa").innerText = `R$ ${valorPessoa}`;
    document.getElementById("custoDiario").innerText = `R$ ${custoDiario}`;
    document.getElementById("total").innerText = `R$ ${custoTotal}`;
}
