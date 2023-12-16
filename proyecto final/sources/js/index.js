window.onload = function () {
    console.log ("la pagina ha cargado")
}

var desconocido = document.getElementById("name")
var desconocido2 = document.getElementById("birthday")
var enlace = document.getElementById("subir")


enlace.onclick = function() {
    localStorage.setItem("nombre", desconocido.value)
    localStorage.setItem("nacimiento", desconocido2.value)
}

// enlace.onclick = function bro() {
//     if (desconocido2.value = 20/4/1889) {
//         alert("bro?")
//     } else {}
// }

function verificarCheckbox() {
    var carrito = document.getElementById('anadir');

    if (carrito.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox2() {
    var carrito2 = document.getElementById('anadir2');

    if (carrito2.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox3() {
    var carrito3 = document.getElementById('anadir3');

    if (carrito3.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox4() {
    var carrito4 = document.getElementById('anadir4');

    if (carrito4.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox5() {
    var carrito5 = document.getElementById('anadir5');

    if (carrito5.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox6() {
    var carrito6 = document.getElementById('anadir6');

    if (carrito6.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox7() {
    var carrito7 = document.getElementById('anadir7');

    if (carrito7.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox8() {
    var carrito8 = document.getElementById('anadir8');

    if (carrito8.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox10() {
    var carrito10 = document.getElementById('anadir10');

    if (carrito10.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox11() {
    var carrito11 = document.getElementById('anadir11');

    if (carrito11.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox12() {
    var carrito12 = document.getElementById('anadir12');

    if (carrito12.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox14() {
    var carrito14 = document.getElementById('anadir14');

    if (carrito14.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox15() {
    var carrito15 = document.getElementById('anadir15');

    if (carrito15.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox16() {
    var carrito16 = document.getElementById('anadir16');

    if (carrito16.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox17() {
    var carrito17 = document.getElementById('anadir17');

    if (carrito17.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox18() {
    var carrito18 = document.getElementById('anadir18');

    if (carrito18.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox19() {
    var carrito19 = document.getElementById('anadir19');

    if (carrito19.checked) {
        ejecutarScript();
    } else {
    }
}

function verificarCheckbox20() {
    var carrito20 = document.getElementById('anadir20');

    if (carrito20.checked) {
        ejecutarScript();
    } else {
    }
}

function ejecutarScript() {
    alert("añadido")
}