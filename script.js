// Arreglo que contiene el orden correcto de las palabras 

let orden_correcto = ['pasear', 'oveja', 'rio', 'agua', 'vecina','agradecio','pastado']

//palabras desordenadas para mostrar en opciones 

let palabras_juego = ['agua','vecina', 'pasear', 'pasrando','oveja','agradecio', 'rio']

//container de las opciones 
let contenedorOpciones = document.getElementById("opciones")
//boton comprobar
let comprobar = document.getElementById("comprobar")
//texto donde se muestra el resultado 
let txtResultado = document.getElementById("resultado")

//arreglo que contiene el orden  de las palabras que el usuario elegiendo,
//tambien me sirve para saber las posiciones disponibles
let porDisponible = ["","","","","","",""]

//funcion para agregar las opciones 
function agregarOpciones(){
    palabras_juego.forEach(element =>{
        let div = document.createElement("div")
        div.className = "palabra"
        div.innerHTML = element
        div.setAttribute("onclick", "completar(this")
        contenedorOpciones.appendChild(div)
    })
}
agregarOpciones()

//agrga el metodo remove onclick a cada elemento span del texto
function agregarEliminarAspan(){
    var spans = document.getElementByIdTagName("span")
    for(let i=0; i < spans.length; i++){
        spans[i].setAttribute("onclick", "remove(this")
    }
}
agregarEliminarAspan()

//funcion queu coloca el texto de opcion elegida en el correspondiente
function completar(palabra){
    let posLibre = posDisponible.indexOf("")
    document.getElementById(posLibre).innerHTML = palabra.innerHTML
    posDisponible(posLibre) = palabra.innerHTML
    contenedorOpciones.removeChild(palabra)
}













