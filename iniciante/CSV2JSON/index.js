let textarea_csv
let textarea_json
let json
let csv
let primeira_iteracao = true

function botao_click(event) {
    iniciar_variaveis()

    if(event == "tojson") {
        if (validar_csv()) {
            converter_csv_to_json()
            mostrar_json_convertido()
        } else {
            return alert("Formato inválido!")
        }
    } else if(event == "tocsv") {
        primeira_iteracao = true

        if(validar_json()) {
            converter_json_to_csv()
            mostra_csv_convertido()
        } else {
            return alert("Fomarto inválido!")
        }
    } else {
        return alert("Erro!")
    }
}

function iniciar_variaveis() {
    textarea_csv = document.getElementById('texto_csv')
    textarea_json = document.getElementById("textarea_json")
}

function validar_json() {
    try {
        JSON.parse(textarea_json.value)
    } catch(e) {
        return false
    }
    return true
}

function validar_csv() {
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

function converter_json_to_csv() {
    let array_objetos = JSON.parse(textarea_json.value)
    csv = ""

    if(array_objetos.length == undefined) {
        let objeto = array_objetos 
        to_json(objeto)
    } else {
        for(let i in array_objetos) {
            to_json(array_objetos[i])
        }
    }
    
}

function to_json(objeto) {
    let indices = []
    csv = csv || ""

    for(let indice in objeto) {
        indices.push(indice)
    }

    //monta os indices somente se for 1 json
    if(primeira_iteracao) {
        for(let i = 0; i < indices.length; i++) {
            if(i != indices.length - 1) {
                csv += `${indices[i]},`
            } else {
                csv += `${indices[i]}\n`
            }
        }
        
    }
    primeira_iteracao = false

    //monta os valores
    for(let indice in objeto) {
        if(indice == indices[indices.length - 1]) { //verifica se é o ultimo indice
            csv += `${objeto[indice]}\n`
        } else {
            csv += `${objeto[indice]},`
        }
        
    }
}

function converter_csv_to_json() {
    json = "["
    let array_linhas = textarea_csv.value.trim().split('\n')
    let array_valores = []
    let array_objetos = []
    let objeto = {}
    
    for(let i = 0; i < array_linhas.length; i++) {
        //extraio os dados individuais e removo possiveis aspas
        array_valores.push(array_linhas[i].replace(/['"]+/g, '').split(','))
    }
    
    for(let i = 1; i < array_valores.length; i++) {
        for(let j = 0; j < array_valores[0].length; j++) {
            objeto[array_valores[0][j]] = array_valores[i][j]
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

function mostra_csv_convertido() {
    textarea_csv.value = csv
}

function mostrar_json_convertido() {
    textarea_json.value = json
}