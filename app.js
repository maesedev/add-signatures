/*
 * Javascript//
 * 
 * By:santiago Garzón//
 * 
 * Área: Informatica// 
 */




//agregar materia
const   $INPUT = document.querySelector(".input-nota")
const   $SELECT = document.querySelector(".select-materia")
let     count = 1

const $TABLE = document.getElementById("table")
const fragment  = document.createDocumentFragment()

const validarNota = ($block)=> {
    if($block.value >= 0 && $block.value <=50  &&  $block.value != undefined  && $block.value != "")return true   
    else console.log('error: No fue rellenado de manera correcta la NOTA o el numero es invalido')
    
}

const notas = []

const agregarMateria = ()=>{
    if(validarNota($INPUT)  &&  $TABLE.children.length < 8 ) {

        $TR = document.createElement('TR')
        $TR.classList.add('table-materias')
        $TDMateria = document.createElement('TD')
        $TDNota = document.createElement('TD')

        

        $TDMateria.textContent =  $SELECT.selectedOptions[0].innerText
        $TDNota.textContent    =  $INPUT.value
        
        notas.push( parseInt($INPUT.value)  )

        $TR.appendChild($TDMateria)
        $TR.appendChild($TDNota)

        fragment.appendChild($TR)
        $TABLE.appendChild(fragment)

        habilitarBoton($btnSaberPromedio)
        sumarContador()

}else if($TABLE.children.length == 8){
    alertify.alert("No puedes agregar mas materias")
}
else{    alertify.alert("Nota invalida")
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



//contador

$contador = document.getElementById('contador')
function sumarContador(){
    $contador.textContent = count + "/7"
    count++
}