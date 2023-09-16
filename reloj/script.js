/* Reloj */
const agujaH = document.querySelector(".aguja-hora")
const agujaM = document.querySelector(".aguja-minutos")
const agujaS = document.querySelector(".aguja-segundos")
var fecha = new Date()

let horaPrev = fecha.getHours()
let minutoPrev = fecha.getMinutes()
let segundoPrev = fecha.getSeconds()
let hora = 0;
let minuto = 0;
let segundo = 0;
let minutoBar = 0;


const horario = ()=>{
    (horaPrev > 12) ? hora = horaPrev - 12
                    : hora = horaPrev
    minuto = minutoPrev
    segundo = segundoPrev
}

const reloj = ()=> {
    fecha = new Date()
    horaPrev = fecha.getHours()
    minutoPrev = fecha.getMinutes()
    segundoPrev = fecha.getSeconds()
    horario()

    agujaH.style.transform = `rotate(${hora*30 + minuto * 0.5}deg)`

    minutoBar = (minuto*360/60) + (segundo*6/60)
    agujaM.style.transform = `rotate(${minutoBar}deg)`

    agujaS.style.transform = `rotate(${segundo*360/60}deg)`
}

setInterval(()=>{reloj(); console.log("vuelta")},1000)