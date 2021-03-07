const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
var optionUser = "";

getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
}


getValueCPU = function() {
    var cpu = "";
    if (getRandomArbitrary(0, 3) <= 1) {
        cpu = TIJERA;
    } else if (getRandomArbitrary(0, 3) > 1 && getRandomArbitrary(0, 3) <= 2) {
        cpu = PIEDRA;
    } else {
        cpu = PAPEL;
    }
    return cpu;
}

ganador = function(optionUser) {
    var cpu = getValueCPU();
    alert(`Usted selecciono: ${optionUser} y la cpu ${cpu}`);
    if (optionUser === cpu) {
        alert("Empate");
    } else if (optionUser === PAPEL && cpu === TIJERA) {
        alert("Gana la CPU");
    } else if (optionUser === TIJERA && cpu === PAPEL) {
        alert("Usted ha ganado");
    } else if (optionUser === PIEDRA && cpu === PAPEL) {
        alert("Gana la CPU");
    } else if (optionUser === PAPEL && cpu === PIEDRA) {
        alert("Usted ha ganado");
    } else if (optionUser === TIJERA && cpu === PIEDRA) {
        alert("Gana la CPU");
    } else if (optionUser === PIEDRA && cpu === TIJERA) {
        alert("Usted ha ganado");
    }
}

main = function() {
    optionUser = prompt("1. Papel \n2. Tijera \n3. Piedra");
    switch (optionUser) {
        case "1":
            optionUser = PAPEL;
            ganador(optionUser);
            break;
        case "2":
            optionUser = TIJERA;
            ganador(optionUser);
            break;
        case "3":
            optionUser = PIEDRA;
            ganador(optionUser);
            break;
        default:
            alert("Seleccione una opción valida");
            alert(PAPEL);
            alert(TIJERA);
            alert(PIEDRA);
    }
}

main();