// Arreglo que contiene el orden correcto de las palabras 

let orden_correcto = [
    '.updateOne',
    '$set:',
    '.deleteOne',
    '({"nombre":"Top"})',
    '.dropDatabase',
    '()',
   
]

//palabras desordenadas para mostrar en opciones 

let palabras_juego = [
    '({"nombre":"Top"})',
    '.dropDatabase',
    '.updateOne',
    '$set:',
    '()',
    '.deleteOne'
]

//container de las opciones 
let contenedorOpciones = document.getElementById("opciones")
//boton comprobar
let comprobar = document.getElementById("comprobar")
//texto donde se muestra el resultado 
let txtResultado = document.getElementById("resultado")

//arreglo que contiene el orden  de las palabras que el usuario elegiendo,
//tambien me sirve para saber las posiciones disponibles
let posDisponible = ["", "", "", "", "", ""]

//funcion para agregar las opciones 
function agregarOpciones() {
    palabras_juego.forEach(element => {
        let div = document.createElement("div")
        div.className = "palabra"
        div.innerHTML = element
        div.setAttribute("onclick", "completar(this)")
        contenedorOpciones.appendChild(div)
    })
}
agregarOpciones()

//agrga el metodo remove onclick a cada elemento span del texto
function agregarEliminarAspan() {
    var spans = document.getElementsByTagName("span")
    for (let i = 0; i < spans.length; i++) {
        spans[i].setAttribute("onclick", "remove(this)")
    }
}
agregarEliminarAspan()

//funcion queu coloca el texto de opcion elegida en el correspondiente
function completar(palabra) {
    let posLibre = posDisponible.indexOf("")
    document.getElementById(posLibre).innerHTML = palabra.innerHTML
    posDisponible[posLibre] = palabra.innerHTML
    contenedorOpciones.removeChild(palabra)
}

//funcion que elimina una palabra del texto y la pone de nuevo en las opciones 
function remove(palabra) {
    //agregamos la opcion nuevamente al listado
    let div = document.createElement("div")
    div.className = "palabra"
    div.innerHTML = palabra.innerHTML
    div.setAttribute("onclick", "completar(this)")
    contenedorOpciones.appendChild(div)

    //eliminamos el texto del span
    palabra.innerHTML = ""
    posDisponible[palabra.id] = ""

    document.getElementById(palabra.id).style.background = "#ccc"

    //limpiamos el texto 
    txtResultado.innerHTML = ""
}


//Funcion que comprueba si esta correcto 
comprobar.onclick = function () {
    //compruebo si todavia hay palabras disponibles 
    let posLibre = posDisponible.indexOf("")
    let totalAciertos = 0

    if (posLibre == -1) {
        for (i = 0; i < orden_correcto.length; i++) {
            if (orden_correcto[i] == posDisponible[i]) {
                document.getElementById(i).style.background = "#c0ff33"
                totalAciertos++
            } else {
                document.getElementById(i).style.background = "#fb4b4b"
            }
        }

        if (totalAciertos == orden_correcto.length) {
            txtResultado.innerHTML = "Muy bien!!"
        } else {
            txtResultado.innerHTML = "Exsisten errores!!"
        }

    } else {
        alert("Completa todos los campos")
    }
}











