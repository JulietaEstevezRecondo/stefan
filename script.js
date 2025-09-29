function verificarValor() {
    let valor = parseInt(document.getElementById("inputValor").value);
    let mensaje = document.getElementById("mensaje");

    if (valor === 100) {
        mensaje.textContent = "🎉 Felicitaciones, el valor es exactamente 100!";
        mensaje.style.color = "green";
    } else { mensaje.textContent = "❌ El valor no es 100. Intenta de nuevo.";
       
        mensaje.style.color = "red";
    }
}   
