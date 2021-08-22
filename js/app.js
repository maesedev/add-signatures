/*
 * Javascript//
 * 
 * By:santiago Garzón//
 * 
 * Área: Informatica// 
 */



const   $INPUT = document.querySelector(".input-nota")
const   $SELECT = document.querySelector(".select-materia")
let     count = 1;

//max count es maxima cantidad de materias menos uno Ej: si el maximo es 9 materias, entonces maxcount =10 
let     maxCount = 10;

const $TABLE = document.getElementById("table")
const fragment  = document.createDocumentFragment()

function validarNota($block) {
    if($block.value >= 0 && $block.value <=50  &&  $block.value != undefined  && $block.value != "")return true   
    else console.log('error: No fue rellenado de manera correcta la NOTA o el numero es invalido')
    
}

const notas = []
const materias = []


//agregar Materia
function agregarMateria(){
    if(validarNota($INPUT)  &&  $TABLE.children.length <  maxCount && validarMateria($SELECT)) {

        $TR = document.createElement('TR')
        $TR.classList.add('table-materias')
        $TDMateria = document.createElement('TD')
        $TDNota = document.createElement('TD')

        

        $TDMateria.textContent =  $SELECT.selectedOptions[0].innerText
        $TDNota.textContent    =  $INPUT.value
        
        notas.push( parseInt($INPUT.value)  )
        materias.push($SELECT.selectedOptions[0].innerText)
        $TR.appendChild($TDMateria)
        $TR.appendChild($TDNota)

        fragment.appendChild($TR)
        $TABLE.appendChild(fragment)

        habilitarBoton($btnSaberPromedio)
        sumarContador()

}else if($TABLE.children.length == maxCount){
    alertify.alert("No puedes agregar mas materias.")
}else if(!validarMateria($SELECT)){
    alertify.alert("Solo puedes agregar una vez esta materia.")
}else {    alertify.alert("Nota invalida.")
}


}


document.getElementById("submit-btn").addEventListener('click',agregarMateria)



//saber promedio y si pasó
$btnSaberPromedio = document.getElementById('bonice-o-miedo')
$btnSaberPromedio.addEventListener('click',()=>{

    if($TABLE.children.length > 1){

        let promedio = 0
        
        notas.forEach(item => promedio += item)

        promedio = promedio / notas.length;

        (promedio > 30) ? alertify.alert("Felicidades has pasado este semestre") : alertify.alert("Lo siento tu promedio es menos de 30 Pts por lo que no has pasado este semestre") 

    }else{
        alertify.alert("Por favor introduce más materias")
    }
})



function habilitarBoton($){

    $.style.backgroundColor = "var(--blue)"

}


function validarMateria($) {
    if (materias.includes($.selectedOptions[0].innerText)) {
        return false
    }else return true
}


//contador

$contador = document.getElementById('contador')

function sumarContador(){
    $contador.textContent = count + "/9"
    count++
}