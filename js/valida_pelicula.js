document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("elementosForm").addEventListener("submit", (event) => {
        event.preventDefault();
        validarCampos();
    });

    document.querySelectorAll(".input").forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Tab" || event.key === "Enter") {
                event.preventDefault();
                validarCampos();
            }
        });
    });

});

const validarCampos = () => {

    resetErrorMessages();

    const titulo = document.getElementById("titulo").value.trim();
    const fechaLanzamiento = document.getElementById("fechaLanzamiento").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const duracion = document.getElementById("duracion").value.trim();
    const director = document.getElementById("director").value.trim();
    const reparto = document.getElementById("reparto").value.trim();
    const sinopsis = document.getElementById("sinopsis").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    let isValid = true;

    if (titulo === "") {
        displayErrorMessage("tituloError", "Por favor ingrese un título.");
        document.getElementById("titulo").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("titulo").classList.remove("is-invalid");
        document.getElementById("titulo").classList.add("is-valid");
    }

    if (fechaLanzamiento === "") {
        displayErrorMessage("fechaLanzamientoError", "Por favor ingrese una fecha de lanzamiento.");
        document.getElementById("fechaLanzamiento").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("fechaLanzamiento").classList.remove("is-invalid");
        document.getElementById("fechaLanzamiento").classList.add("is-valid");
    }

    if (genero === "") {
        displayErrorMessage("generoError", "Por favor ingrese un genero.");
        document.getElementById("genero").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("genero").classList.remove("is-invalid");
        document.getElementById("genero").classList.add("is-valid");
    }

    if (duracion === "") {
        displayErrorMessage("duracionError", "Por favor ingrese una duracion.");
        document.getElementById("duracion").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("duracion").classList.remove("is-invalid");
        document.getElementById("duracion").classList.add("is-valid");
    }

    if (director === "") {
        displayErrorMessage("directorError", "Por favor ingrese un director.");
        document.getElementById("director").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("director").classList.remove("is-invalid");
        document.getElementById("director").classList.add("is-valid");
    }

    if (reparto === "") {
        displayErrorMessage("repartoError", "Por favor ingrese un reparto.");
        document.getElementById("reparto").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("reparto").classList.remove("is-invalid");
        document.getElementById("reparto").classList.add("is-valid");
    }

    if (sinopsis === "") {
        displayErrorMessage("sinopsisError", "Por favor ingrese una sinopsis.");
        document.getElementById("sinopsis").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("sinopsis").classList.remove("is-invalid");
        document.getElementById("sinopsis").classList.add("is-valid");
    }

    if (imagen === "") {
        displayErrorMessage("imagenError", "Por favor ingrese una imagen.");
        document.getElementById("imagen").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("imagen").classList.remove("is-invalid");
        document.getElementById("imagen").classList.add("is-valid");
    }

    if (isValid) {
        alert("¡Bienvenido!");
        location.href = './../index.html'
    }

};

const displayErrorMessage = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
};

const resetErrorMessages = () => {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
         // agrego la clase is-valid para que quede en verde
             
    });
};