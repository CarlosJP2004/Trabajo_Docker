let intervaloID;
document.addEventListener("DOMContentLoaded", iniciar, false);

function iniciar() {
    document.getElementById("iniciar").addEventListener("click", iniciarTemporizador);
    document.getElementById("cancelar").addEventListener("click", cancelarTemporizador);
}

function iniciarTemporizador() {
    const input = document.getElementById("sec").value;
    const mensaje = document.getElementById("mensaje");
    const contador = document.getElementById("contador");
    const expReg = /^\d+$/;

    //cancela cualquier temporizador ya abierto
    cancelarTemporizador();

    mensaje.textContent = "";
    contador.textContent = "";

    //si la entrada es invalida se corta la funcion
    if (!expReg.test(input)) {
        mensaje.textContent = "Introduce un numero de segundos valido";
        mensaje.style.color = "red";
        return;
    }

    let segundos = parseInt(input);
    contador.textContent = segundos;

    //inicia la cuenta regresiva
    intervaloID = setInterval(function () {
        contador.textContent = segundos;
        segundos--;
        if (segundos < 0) {
            clearInterval(intervaloID);
            contador.textContent = "";
            mensaje.textContent = "⏰ ¡Tiempo terminado!";
            mensaje.style.color = "red";
        }
    }, 1000);

}

function cancelarTemporizador() {
    clearInterval(intervaloID);

    const mensaje = document.getElementById("mensaje");
    const contador = document.getElementById("contador");

    mensaje.textContent = "El temporizador ha sido cancelado por el usuario";
    mensaje.style.color = "orange";
    contador.textContent = "";
}