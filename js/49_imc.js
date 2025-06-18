function calcularImc(){
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let resultado = document.getElementById('resultado');

    let num_altura = parseFloat(altura.value)/100;
    let num_peso = parseFloat(peso.value);
    let imc = num_peso/num_altura**2;

    resultado.textContent = imc.toFixed(2);

    if(imc < 18.6) {
        resultado.style.backgroundColor='#fdf4b0';
    }
    else{
        if(imc < 24.9){
            resultado.style.backgroundColor='#5bcebf';
            
        }
        else{
            resultado.style.backgroundColor='#ff3b58';
        }
    }

}