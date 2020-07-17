var quadrado = document.getElementById('quadrado');
var textarea = document.getElementById('textarea');

var topleft = document.getElementById('sup_esquerda');
var topright = document.getElementById('sup_direita');
var bottomleft = document.getElementById('inf_esquerda');
var bottomright = document.getElementById('inf_direita');

function sup_esquerda() {
    quadrado.style.borderTopLeftRadius = topleft.value + "px";
    atualizar();
}

function sup_direita() {
    quadrado.style.borderTopRightRadius = topright.value + "px";
    atualizar();
}

function inf_esquerda() {
    quadrado.style.borderBottomLeftRadius = bottomleft.value + "px";
    atualizar();
}

function inf_direita() {
    quadrado.style.borderBottomRightRadius = bottomright.value + "px";
    atualizar();
}

function atualizar() {
    if(topleft.value == topright.value && topright.value == bottomleft.value && bottomleft.value == bottomright.value) {
        textarea.value = "";
        textarea.value = "border-radius: " + topleft.value + "px; \n";
    } else {
        textarea.value = "";
        if(topleft.value > 0) textarea.value = "border-top-left-radius: " + topleft.value + "px; \n";
        if(topright.value > 0) textarea.value += "border-top-right-radius: " + topright.value + "px; \n";
        if(bottomleft.value > 0) textarea.value += "border-bottom-left-radius: " + bottomleft.value + "px; \n";
        if(bottomright.value > 0) textarea.value += "border-bottom-right-radius: " + bottomright.value + "px; \n";
}
    }
    