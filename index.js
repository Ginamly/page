// El texto se cifra con un desplazamiento de 3 posiciones hacia la derecha en el alfabeto
function cifrar(texto) {
    return texto.replace('e', 'enter').replace('i', 'imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat')
}

// El texto se descifra con un desplazamiento de -3 posiciones hacia la derecha en el alfabeto
  function descifrar(textoCifrado) {
    return textoCifrado.replace('ai', 'a').replace('enter', 'e').replace('imes', 'i').replace('ober', 'o').replace('ufat', 'u')
}

function validarCadena(cadena) {
    // Verificar si la cadena contiene caracteres especiales
    const caracteresEspeciales = /[!@#$%^&*()_+{}\[\]|\\:;"'<>,.?/~`]/;
    const validacionElemento = document.getElementById('validacion')
    if (caracteresEspeciales.test(cadena) || /[A-Z]/.test(cadena)) {
      validacionElemento.style.display = "block";
      return false;
    }

    validacionElemento.style.display = "none";
    return true;
  }


document.getElementById("cifrar").addEventListener("click", () => {
    const valor = document.getElementById("valor").value;
    const textoCifrado = cifrar(valor);
    document.getElementById("texto-resultado").innerHTML = textoCifrado;
    document.getElementById("texto-resultado").style.display = 'block';
    document.querySelector(".boton-copiado").style.display = "flex";
});

document.getElementById("descifrar").addEventListener("click", () => {
    const valor = document.getElementById("valor").value;
    const textoDescifrado = descifrar(valor);
    document.getElementById("texto-resultado").innerHTML = textoDescifrado;
    document.getElementById("texto-resultado").style.display = 'block';
    document.querySelector(".boton-copiado").style.display = "flex";
});

document.getElementById('valor').addEventListener('keyup', (event) => {
    validarCadena(event.target.value)
    // Si esta vaion mostrar elemento con id empty si no no mostarlo
    if (event.target.value) {
        document.getElementById("vacio").style.display = "none";
    } else {
        document.getElementById("vacio").style.display = "block";
    }
})

document.getElementById('copiar').addEventListener('click', () => {
    // añadir el valor al clipboard
    navigator.clipboard.writeText(document.getElementById("texto-resultado").innerText);
    // Mostrar mensaje de copiado

    document.getElementById("mensaje").style.display = "block";
    setTimeout(() => {
        document.getElementById("mensaje").style.display = "none";
    }, 4000)
})
