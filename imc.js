function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    
    if (!peso || !altura || altura <= 0) {
        document.getElementById("resultado").textContent = 'Por favor, insira valores válidos.'
        return;
    }
    
    let imc = peso / (altura * altura)
    let classificacao = ''
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso'
    } else if (imc < 24.9) {
        classificacao = 'Peso normal'
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso'
    } else {
        classificacao = 'Obesidade'
    }
    
    document.getElementById("resultado").textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`
}