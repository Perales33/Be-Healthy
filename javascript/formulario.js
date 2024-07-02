function fecha(){
    var fechaHoy = new Date()
    var fecha1 = fechaHoy.toDateString()
    var fecha = document.getElementById("fecha").innerHTML = ("Hora: " + fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds() + "<br><br>")
    var dia = document.getElementById("fecha2").innerHTML = ("Fecha: " +  fecha1.substring(0,3)  + " " + fechaHoy.getDate() + " of " + fecha1.substring(4,7) + ", " + fechaHoy.getFullYear())
}
setInterval(fecha,1000)
function reseteo(){
    alert("Has reseteado todos los campos")

    var lista = document.getElementById("pregun1")
    lista = lista.style.borderColor="grey"
    document.getElementById("Ballesteros").style.display="none"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"

    var nombre = document.getElementById("nombre")
    nombre = nombre.style.borderColor="grey"

    var primero = document.getElementById("primero")
    primero = primero.style.borderColor="grey"

    var dia = document.getElementById("dia")
    var m = document.getElementById("m")
    dia = dia.style.borderColor="grey"
    m = m.style.borderColor="grey"

    var sexos = document.getElementById("sexo")
    sexos = sexos.style.borderColor="grey"
    
    var lista = document.getElementById("pregun1")
    lista = lista.style.borderColor="grey"

    var caloria = document.getElementById("preg2")
    caloria = caloria.style.borderColor="grey"

    var preg = document.getElementById("preg3")
    preg = preg.style.borderColor="grey"

    var baloncesto = document.getElementById("baloncesto")
    var futbol = document.getElementById("fútbol")
    baloncesto = baloncesto.style.display="none"
    futbol = futbol.style.display="none"
    var tenis = document.getElementById("tenis")
    tenis = tenis.style.display="none"
    var atletismo = document.getElementById("atletismo")
    var golf = document.getElementById("golf")
    atletismo = atletismo.style.display="none"
    golf = golf.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
}
function resposnder(){
    var lista = document.getElementById("pregun1")
    var indiceSeleccionado = lista.selectedIndex
    var opcionSeleccionada = lista.options[indiceSeleccionado]
    var textoSeleccionado = opcionSeleccionada.text
    var valorSeleccionado = opcionSeleccionada.value
    if(opcionSeleccionada.text=="Si")
    {
        alert("Así me gusta, siendo una persona sana")
        lista = lista.style.borderColor="blue"
    }
    else if (opcionSeleccionada.text=="No")
    {
        alert("Debe hacer más deporte")
        lista = lista.style.borderColor="blue"
    }
}
function validar()
{
    var nombre = document.getElementById("nombre")
    var nombres = nombre.value
    if(nombre.value=="" ){
        alert("Debe incluir un nombre")
        var nombre = document.getElementById("nombre")
        nombre = nombre.style.borderColor="red"
    }

    var primero = document.getElementById("primero")
    var primer = primero.value
    if(primero.value==""){
        alert("Debe incluir el primer apellido")
        var nombre = document.getElementById("primero")
        primero = primero.style.borderColor="red"
    }

    var dia = document.getElementById("dia")
    var diaSeleccionado = dia.selectedIndex
    var diaSeleccion = dia.options[diaSeleccionado]
    var diaSelecciona = diaSeleccion.value

    var m = document.getElementById("m")
    var mesSeleccionado = m.selectedIndex
    var mesSeleccion = m.options[mesSeleccionado]
    var mesSelecciona = mesSeleccion.value

    if(diaSelecciona=="" || mesSelecciona=="")
    {
        alert("Debe indicar el dia y el mes que naciste")
        dia = dia.style.borderColor="red"
        m = m.style.borderColor="red"
    }

    var sexos = document.getElementById("sexo")
    var indicesexos = sexos.selectedIndex
    var sexoSeleccionado = sexos.options[indicesexos]
    var sexoSelec = sexoSeleccionado.value
    if(sexoSelec==""){
        alert("Debe seleccionar un sexo")
        sexos = sexos.style.borderColor="red"
    }

    var lista = document.getElementById("pregun1")
    var indiceSeleccionado = lista.selectedIndex
    var opcionSeleccionada = lista.options[indiceSeleccionado]
    var opcionSelec = opcionSeleccionada.value

    if(opcionSeleccionada.value=="")
    {
        alert("Debe indicar si hace deporte")
        lista = lista.style.borderColor="red"
    }

    var caloria = document.getElementById("preg2")
    var caloriaToma= caloria.value
    if(caloria.value==0)
    {
        alert("Debe indicar las calorias que toma")
        caloria = caloria.style.borderColor="red"
    }

    var preg = document.getElementById("preg3")
    var pregSeleccionado = preg.selectedIndex
    var pregSeleccion = preg.options[pregSeleccionado]
    var pregSelecciona = pregSeleccion.value
    if(pregSelecciona==""){
        alert("Debes seleccionar un deporte")
        preg = preg.style.borderColor="red"
    }

    var aceptada = document.getElementById("aceptada")
    if(aceptada.checked==false)
    {
        alert("Debes aceptar las condiciones de uso de datos")
    }

    if(opcionSelec!=="" && mesSelecciona!=="" && diaSelecciona!=="" && nombres!=="" && primer!="" && aceptada.checked==true && caloriaToma!==0 && pregSelecciona!=="" && sexoSelec!=="") 
    {
        var nombre = document.getElementById("nombre")
        alert("Gracias por sus datos")
        alert("Bienvenido Mr/Ms " +  nombre.value)
        return document.getElementById("enviar").type="submit"
    }
}

function segundo(){
    alert("Este campo no es obligatorio de rellenar")
}

function mes()
{
    var mes = document.getElementById("m")
    mes = mes.style.borderColor="#17a19b"
    alert("Seleccione un mes de nacimiento")
}

function dia(){
    var dia = document.getElementById("dia")
    dia = dia.style.borderColor="#17a19b"
    alert("Seleccione el dia que naciste")
}

function calorias(){
    var caloria = document.getElementById("preg2")
    var caloriaToma= caloria.value
    if(caloriaToma<=2000)
    {
        alert("Bien hecho, sigue así")
        caloria = caloria.style.borderColor="blue"
    }
    else if(caloriaToma>2000)
    {
        alert("Debes tomar como máximo un total de 2000 calorías diarias")
        caloria = caloria.style.borderColor="blue"
    }
}

function nombrre(){
    var valido = /^\D+$/
    var nombrre = document.getElementById("nombre")
    nom = nombrre.value
    if(valido.test(nom)){
        alert("Formato valido")
        nombrre = nombrre.style.borderColor="blue"
    }
    else{
        alert("Formato de nombre no valido, Ponga solamente carácteres alfabéticos")
        nombrre = nombrre.style.borderColor="red"
    }
}

function prim(){
    var valido = /^\D+$/
    var prim = document.getElementById("primero")
    prime = prim.value
    if(valido.test(prime)){
        alert("Formato valido")
        prim = prim.style.borderColor="blue"
    }
    else{
        alert("Formato de apellido no valido, Ponga solamente carácteres alfabéticos")
        prim = prim.style.borderColor="red"
    }
}
function sengo(){
    var valido = /^\D+$/
    var segun = document.getElementById("segundo")
    seg = segun.value
    if(valido.test(seg)){
        alert("Formato valido")
        segun = segun.style.borderColor="blue"
    }
    else{
        alert("Formato de apellido no valido, Ponga solamente carácteres alfabéticos")
        segun = segun.style.borderColor="red"	
    }
}

function dias(){
    var dias = document.getElementById("dia")
    var indicedias = dias.selectedIndex
    var diaSeleccionado = dias.options[indicedias]
    var diasSelec = diaSeleccionado.value
    if(diasSelec!=="")
    {
        dias = dias.style.borderColor="blue"
    }
    else{
        dias = dias.style.borderColor="red"
    }
}
function meses(){
    var meses = document.getElementById("m")
    var indicemeses = meses.selectedIndex
    var mesSeleccionado = meses.options[indicemeses]
    var mesesSelec = mesSeleccionado.value
    if(mesesSelec!=="")
    {
        meses = meses.style.borderColor="blue"
    }
    else{
        meses = meses.style.borderColor="red"
    }
}

function sexos(){
    var sexos = document.getElementById("sexo")
    var indicesexos = sexos.selectedIndex
    var sexoSeleccionado = sexos.options[indicesexos]
    var sexoSelec = sexoSeleccionado.value
    if(sexoSelec!=="")
    {
        sexos = sexos.style.borderColor="blue"
    }
    else{
        sexos = sexos.style.borderColor="red"
    }
}

function elmejor(){
    var preg = document.getElementById("preg3")
    var pregSeleccionado = preg.selectedIndex
    var pregSeleccion = preg.options[pregSeleccionado]
    var pregSelecciona = pregSeleccion.value
    if(pregSelecciona==""){
        preg = preg.style.borderColor="red"
        alert("Debes seleccionar un deporte")
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="none"
        futbol = futbol.style.display="none"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="none"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="none"
        golf = golf.style.display="none"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
    }
    else if(pregSelecciona=="1"){
        alert("Has elegido Baloncesto")
        preg = preg.style.borderColor="blue"
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="block"
        futbol = futbol.style.display="none"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="none"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="none"
        golf = golf.style.display="none"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
        var balon = document.getElementById("balon")
        balon = balon.style.borderColor="grey"
        document.getElementById('balon').value = "" 
    }
    else if(pregSelecciona=="2"){
        alert("Has elegido Fútbol")
        preg = preg.style.borderColor="blue"
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="none"
        futbol = futbol.style.display="block"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="none"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="none"
        golf = golf.style.display="none"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
        var fut = document.getElementById("fut")
        fut = fut.style.borderColor="grey"
        document.getElementById('fut').value = "" 
    }
    else if(pregSelecciona=="3"){
        alert("Has elegido Tenis")
        preg = preg.style.borderColor="blue"
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="none"
        futbol = futbol.style.display="none"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="block"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="none"
        golf = golf.style.display="none"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
        var ten= document.getElementById("ten")
        ten = ten.style.borderColor="grey"
        document.getElementById('ten').value = "" 
    }
    else if(pregSelecciona=="4"){
        alert("Has elegido Atletismo")
        preg = preg.style.borderColor="blue"
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="none"
        futbol = futbol.style.display="none"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="none"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="block"
        golf = golf.style.display="none"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
        var atle = document.getElementById("atle")
        atle = atle.style.borderColor="grey"
        document.getElementById('atle').value = "" 
    }
    else if(pregSelecciona=="5"){
        alert("Has elegido Golf")
        preg = preg.style.borderColor="blue"
        var baloncesto = document.getElementById("baloncesto")
        var futbol = document.getElementById("fútbol")
        baloncesto = baloncesto.style.display="none"
        futbol = futbol.style.display="none"
        var tenis = document.getElementById("tenis")
        tenis = tenis.style.display="none"
        var atletismo = document.getElementById("atletismo")
        var golf = document.getElementById("golf")
        atletismo = atletismo.style.display="none"
        golf = golf.style.display="block"
        var preg6 = document.getElementById("preg6")
        preg6 = preg6.style.display="none"
        var preg7 = document.getElementById("preg7")
        preg7 = preg7.style.display="none"
        var preg5 = document.getElementById("preg5")
        preg5 = preg5.style.display="none"
        var gol = document.getElementById("gol")
        gol = gol.style.borderColor="grey"
        document.getElementById('gol').value = "" 
    }
}

function baloncesto1(){
var balon = document.getElementById("balon")
var balonSeleccionado = balon.selectedIndex
var balonSeleccion = balon.options[balonSeleccionado]
var balonSelecciona = balonSeleccion.value
if(balonSelecciona==""){
    alert("Debes elegir un Deportista")
    balon = balon.style.borderColor="red"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(balonSelecciona!==""){
    balon = balon.style.borderColor="blue"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="block"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
    
if(balonSelecciona==1){
    alert("“Sí tú no crees en ti, nadie más lo hará”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Jordan").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(balonSelecciona==2){
    alert("Frase Celebre:  “Un triunfador es alguien que conoce los talentos que Dios le concedió, se esfuerza intensamente para convertirlos en habilidades para alcanzar sus metas”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(balonSelecciona==3){
    alert("Frase Celebre:  “Puedo aceptar el fracaso; todos fracasan en algo. Pero no puedo aceptar el no intentarlo”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Lebron").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
}

}

function futbol1(){
var futbol = document.getElementById("fut")
var futSeleccionado = futbol.selectedIndex
var futSeleccion = futbol.options[futSeleccionado]
var futSelecciona = futSeleccion.value
if(futSelecciona==""){
    alert("Debes elegir un Deportista")
    futbol = futbol.style.borderColor="red"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(futSelecciona!==""){
    futbol = futbol.style.borderColor="blue"
    var preg6 = document.getElementById("preg5")
    preg6 = preg6.style.display="block"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
if(futSelecciona==1){
    alert("Frase celebre: “Me hicieron entender que la vida no es solo fútbol”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Lionel").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(futSelecciona==2){
    alert("Frase Celebre: “Yo nunca quise ser un ejemplo”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Diego").style.display="block"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(futSelecciona==3){
    alert("Frase Celebre:  “Cuanto más dificil, mayor es la sensación de victoria”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Pele").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
}
}
function tenis1(){
var tenis = document.getElementById("ten")
var tenSeleccionado = tenis.selectedIndex
var tenSeleccion = tenis.options[tenSeleccionado]
var tenSelecciona = tenSeleccion.value
if(tenSelecciona==""){
    alert("Debes elegir un Deportista")
    tenis = tenis.style.borderColor="red"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(tenSelecciona!==""){
    tenis = tenis.style.borderColor="blue"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="block"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
if(tenSelecciona==1){
    alert("“No temo a nadie, pero respeto a todos”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Federer").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(tenSelecciona==2){
    alert("Frase Celebre: “Hay gente a la que le puede molestar mi ambición, pero quiero se el mejor de la historia”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Djokovic").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(tenSelecciona==3){
    alert("Frase Celebre: “Ya no lucho por ser el número uno mundial, peleo simplemente por seguir siendo competitivo en cada torneo que juego”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Nadal").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(tenSelecciona==4){
}
}
}
function atletismo1(){
var atletismo = document.getElementById("atle")
var atletismoSeleccionado = atletismo.selectedIndex
var atletismoSeleccion = atletismo.options[atletismoSeleccionado]
var atletismoSelecciona = atletismoSeleccion.value
if(atletismoSelecciona==""){
    alert("Debes elegir un Deportista")
    atletismo = atletismo.style.borderColor="red"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(atletismoSelecciona!==""){
    atletismo = atletismo.style.borderColor="blue"
    var preg6 = document.getElementById("preg5")
    preg6 = preg6.style.display="block"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
if(atletismoSelecciona==1){
    alert("Frase Celebre: “Cuando sientas un dolor, trata de olvidar ese dolor. La única forma de lograrlo es sonriendo, ser feliz y disfrutar de estar corriendo”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Kipchoge").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(atletismoSelecciona==2){
    alert("Frase Celebre:  “Los sueños se cumplen”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Rojas").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(atletismoSelecciona==3){
    alert("Frase Celebre:  “Mi motivación es sentirme orgullosa del esfuerzo que hago”.")
    document.getElementById('practica').value = "" 
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Peleteiro").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
}
}
function golf1(){
var golf = document.getElementById("gol")
var golfSeleccionado = golf.selectedIndex
var golfSeleccion = golf.options[golfSeleccionado]
var golfSelecciona = golfSeleccion.value
if(golfSelecciona==""){
    alert("Debes elegir un Deportista")
    golf = golf.style.borderColor="red"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="none"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(golfSelecciona!==""){
    golf = golf.style.borderColor="blue"
    var preg5 = document.getElementById("preg5")
    preg5 = preg5.style.display="block"
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
if(golfSelecciona==1){
    document.getElementById('practica').value = "" 
    alert("Frase celebre: “No importa qué tan bueno seas, siempre puedes mejorar, y esa es la parte que emociona”.")
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Tiger").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Jon").style.display="none"
    document.getElementById("Ballesteros").style.display="none"
}
else if(golfSelecciona==2){
    document.getElementById('practica').value = "" 
    alert("Frase Celebre: “Siempre hay que fijarse en lo positivo, porque si no, tu vida será tibia”.")
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Jon").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Ballesteros").style.display="none"


}
else if(golfSelecciona==3){
    document.getElementById('practica').value = "" 
    alert("Frase Celebre:  “No se consigue nada sin esfuerzo, y lo que se consigue sin esfuerzo, ni lo aprecias, ni lo valoras”.")
    var practica = document.getElementById("practica")
    practica = practica.style.borderColor="grey"
    document.getElementById("Ballesteros").style.display="block"
    document.getElementById("Diego").style.display="none"
    document.getElementById("Jordan").style.display="none"
    document.getElementById("Bird").style.display="none"
    document.getElementById("Lebron").style.display="none"
    document.getElementById("Lionel").style.display="none"
    document.getElementById("Pele").style.display="none"
    document.getElementById("Federer").style.display="none"
    document.getElementById("Djokovic").style.display="none"
    document.getElementById("Nadal").style.display="none"
    document.getElementById("Kipchoge").style.display="none"
    document.getElementById("Rojas").style.display="none"
    document.getElementById("Peleteiro").style.display="none"
    document.getElementById("Tiger").style.display="none"
    document.getElementById("Jon").style.display="none"
}
}
}

function eleccion(){
var preg5 = document.getElementById("practica")
var preg5Seleccionado = preg5.selectedIndex
var preg5Seleccion = preg5.options[preg5Seleccionado]
var preg5Selecciona = preg5Seleccion.value
if(preg5Selecciona==""){
    preg5 = preg5.style.borderColor="red"
    alert("Debes seleccionar una opción")
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
else if(preg5Selecciona!==""){
    preg5 = preg5.style.borderColor="blue"
    if(preg5Selecciona=="No"){
    alert("Que pena, pero bueno no está mal. ¿Eso si que deportes te hubiera gustado prácticar, a parte de este?")
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="none"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="block"
}
else if(preg5Selecciona=="Si"){
    alert("¡QUE BIEN!. ¿Cuentanos un poco tu experiencia en el deporte?")
    var preg6 = document.getElementById("preg6")
    preg6 = preg6.style.display="block"
    var preg7 = document.getElementById("preg7")
    preg7 = preg7.style.display="none"
}
}

}

function imprimir(){
window.print()
}