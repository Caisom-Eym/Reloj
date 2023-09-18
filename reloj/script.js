/* Reloj */
consoleHora()
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
