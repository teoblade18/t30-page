//------------- Obteniendo propiedades html-------------------------------------
let button = document.getElementById('btnAceptar');
button.addEventListener("click", division);

function division() {
    let txtSueldo = document.getElementById('txtSueldo');
    let sueldo = getInt(txtSueldo.value);

    let porcentajes = document.getElementsByClassName('porcentajes');
    let valores = document.getElementsByClassName('valores');

    for (let i = 0; i < porcentajes.length; i++) {
        let porcentaje = parseInt(porcentajes[i].value)
        let valor = parseInt(sueldo * (porcentaje / 100))
        valores[i].value = setInt(valor)
    }

    document.getElementById('result').style.display = "block"
}

function validarPorcentajes() {
    debugger;
    let porcentajes = document.getElementsByClassName('porcentajes');
    let restante = document.getElementById('txtRestante');
    let lblRestante = document.getElementById('lblRestante');

    let porcentajeTotal = 0;

    for (let i = 0; i < porcentajes.length; i++) {
        porcentajeTotal += parseInt(porcentajes[i].value)

        /*if (getInt(porcentajes[i].value) > 100) {
            porcentajes[i].value = '100'
        } else if (diferencia < 0) {
            porcentajes[i].value = '0'
        }*/
    }

    let diferencia = 100 - porcentajeTotal

    restante.value = diferencia

    if (diferencia != 0) {
        restante.style.color = "white";
        restante.style.backgroundColor = "rgb(255, 81, 81)";
        lblRestante.style.color = "white";
        button.disabled = true;
    } else {
        restante.style.color = "white";
        restante.style.backgroundColor = "green";
        lblRestante.style.color = "white";
        button.disabled = false;

        validarSueldo()
    }
}

function validarSueldo() {
    let txtSueldo = document.getElementById('txtSueldo')
    let sueldo = getInt(txtSueldo.value)
    txtSueldo.value = setInt(sueldo);

    if (sueldo > 0) {
        button.disabled = false
    } else {
        button.disabled = true;
    }
}

function getInt(string) {
    if (vacio(string)) {
        string = '0'
    }

    let number = string.replaceAll('.', '')
    number = parseInt(number)
    return number
}

function setInt(num) {
    var num_parts = num.toString().split(",");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(",");
}

function vacio(valor) {
    if (valor == undefined || valor == null || valor == "" || valor == '' || valor == 'null') {
        return true;
    }
    return false;
}