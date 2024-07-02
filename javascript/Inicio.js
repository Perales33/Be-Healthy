function fecha(){
    var fechaHoy = new Date()
    var fecha1 = fechaHoy.toDateString()
    var fecha = document.getElementById("fecha").innerHTML = ("Hora: " + fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds() + " &nbsp  &nbsp Fecha: " +  fecha1.substring(0,3)  + " " + fechaHoy.getDate() + " of " + fecha1.substring(4,7) + ", " + fechaHoy.getFullYear())
}
setInterval(fecha,1000)