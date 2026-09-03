// EFECTO DE ESCRITURA

const texto = "iniciando_sorpresa_para_una_chica_especial();";

let i = 0;

function escribir() {

    if (i < texto.length) {

        document.getElementById("texto").textContent += texto.charAt(i);

        i++;

        setTimeout(escribir, 60);
    }
}

escribir();


// MOSTRAR MENSAJE

function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    mensaje.style.display = "block";

    crearCorazones();

}


// CREAR CORAZONES

function crearCorazones() {

    for (let i = 0; i < 25; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon");

        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "vw";

        corazon.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";

        document.querySelector(".corazones")
            .appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 8000);
    }
}


// CORAZONES AUTOMÁTICOS

setInterval(crearCorazones, 4000);