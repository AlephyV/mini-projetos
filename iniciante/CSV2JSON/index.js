let textarea_csv
let json
let textarea_json 

//acionada quando o botão é clicado
function botao_csv_para_json() {
    //inicializando algumas variaveis
    textarea_csv = document.getElementById('texto_csv')
    textarea_json = document.getElementById("textarea_json")

    if (validar()) {
        converter()
        mostrarResultado()
    } else {
        return alert("Formato inválido!")
    }
}

function validar() {
    /* 
        Aqui verifico se é vazio, 
        se não contém virgula,
        se não contém somento 1 caractere ou
        se o primeiro caracte é uma virgula.
        Caso algum desses ele retorna como formato invalido.
    */
    if(textarea_csv.value == "" || textarea_csv.value.includes(',') == false || textarea_csv.value.length == 1 || textarea_csv.value[0] == ",") {
        return false
    } else {
        return true
    }
}

function converter() {
    json = "["
    let array_linhas = textarea_csv.value.split('\n')
    let array_valores = []
    let array_objetos = []
    let objeto = {}
    
    for(let i = 0; i < array_linhas.length; i++) {
        //extraio os dados individuais e removo possiveis aspas
        array_valores.push(array_linhas[i].replace(/['"]+/g, '').split(','))
    }
    
    for(let i = 1; i < array_valores.length; i++) {
        for(let j = 0; j < array_valores[0].length; j++) {
            objeto[array_valores[0][j].trim()] = array_valores[i][j].trim()
        }
        array_objetos.push(objeto)
        objeto = {}
    }

    for(let i = 0; i < array_objetos.length; i++) {
        json += JSON.stringify(array_objetos[i])
        if (i != array_objetos.length - 1) {
            json += ","
        } else {
            json += "]"
        }
    }
}

function mostrarResultado() {
    textarea_json.value = json
    
}