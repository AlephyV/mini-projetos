var digito;
var saida;

function submit() {
    digito = document.getElementById('binario').value
    saida = document.getElementById('resultado')

    limpar()

    if(digito != "" && eBinario()) {
        converter()
    } else {
        return alert("NÃO É BINÁRIO!")
    }
}

function eBinario() {
    console.log(digito)
    for(var i = 0; i < digito.length; i++) {
        if(digito[i] != 0 && digito[i] != 1) {
            return false;
        }
    }
    return true;
}

function converter() {
    var decimal = parseInt(digito, 2)
    saida.value = decimal
}

function limpar() {
    saida.value = ""
}