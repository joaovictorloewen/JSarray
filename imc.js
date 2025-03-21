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
        cor = 'green'
    } else if (imc < 24.9) {
        classificacao = 'Peso normal'
        cor = 'blue'
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso'
        cor = 'orange'
    } else {
        classificacao = 'Obesidade'
        cor = 'red'
    }
    
    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`
    document.getElementById('resultado').style.color = cor
}