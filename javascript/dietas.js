function calcular(){
    re=14
    var sexos = document.getElementById("sexo")
    var peso = document.getElementById("peso")
    var pesoValor= peso.value
    var edad = document.getElementById("edad")
    var edadValor= edad.value
    var altura = document.getElementById("altura")
    var ValorAltura= altura.value
    var elementos = document.getElementsByName("pregunta")
    if(sexos.value=="1")
    {
        var tabla = document.getElementById("tabla1")
        var t = document.getElementById("t")
        var te = document.getElementById("te")
        t = t.style.display="block"
        te = te.style.display="block"
        for(i=0;i<re;i++){
            var h = document.getElementById("h")
            h.innerHTML = Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)
            var mm = document.getElementById("mm")
            mm.innerHTML = Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)
            var c = document.getElementById("c")
            c.innerHTML = Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)
            var m = document.getElementById("m")
            m.innerHTML = Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)
            var cen = document.getElementById("cen")
            cen.innerHTML = Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)
            var totald = document.getElementById("totald")
            totald.innerHTML =  Math.floor(Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1))
            var totalp = document.getElementById("p")
            totalp.innerHTML =  Math.floor((Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4))-50)
            var totalgp= document.getElementById("gp")
            totalgp.innerHTML =  Math.floor((Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*2 + Math.round((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4))+500)
            
            if(elementos[i].value=="1" && sexos.value=="1"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.2)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.2)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)*1.2)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.2)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.2)
            }
            }
            else if(elementos[i].value=="2" && sexos.value=="1"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.35)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.35)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)*1.35)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.35)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.35)
            }
        }
        else if(elementos[i].value=="3" && sexos[i].value=="1"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.55)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.55)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)*1.55)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.55)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.55)
            } 
        }   
        else if(elementos[i].value=="4" && sexos.value=="1"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.725)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.725)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)*1.725)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.725)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.725)
            }
        }
        else if(elementos[i].value=="5" && sexos.value=="1"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.9)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.9)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.4)*1.9)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.1)*1.9)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((66 + (13.7*pesoValor) + (5*ValorAltura) - (6.8*edadValor))*0.2)*1.9)
            }
        }
       
        }
    }
    else if(sexos.value=="2")
        var tabla = document.getElementById("tabla1")
        var t = document.getElementById("t")
        var te = document.getElementById("te")
        t = t.style.display="block"
        te = te.style.display="block"
        for(i=0;i<re.length;i++){
            var h = document.getElementById("h")
            h.innerHTML = Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)
            var mm = document.getElementById("mm")
            mm.innerHTML = Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)
            var c = document.getElementById("c")
            c.innerHTML = Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)
            var m = document.getElementById("m")
            m.innerHTML = Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)
            var cen = document.getElementById("cen")
            cen.innerHTML = Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)
            var totald = document.getElementById("totald")
            totald.innerHTML =  Math.floor((Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*2) + (Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*2) + (Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)))
            var totalp = document.getElementById("p")
            totalp.innerHTML =  Math.floor(((Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*2) + (Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*2) + (Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)))-50)
            var totalgp= document.getElementById("gp")
            totalgp.innerHTML =  Math.floor((Math.round((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*2 + Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*2 + (Math.round((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)))+500)
            if(elementos[i].value=="1" && sexos.value=="2"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)*1.2)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.2)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)*1.2)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.2)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*1.2)
            }
            }
            else if(elementos[i].value=="2" && sexos.value=="2"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)*1.35)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.35)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)*1.35)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.35)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*1.35)
        }
        }
        else if(elementos[i].value=="3" && sexos.value=="2"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)*1.55)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.55)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)*1.55)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.55)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*1.55)
        } 
        }   
        else if(elementos[i].value=="4" && sexos.value=="2"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)*1.725)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.725)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)*1.725)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.725)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*1.725)
        }
        }
        else if(elementos[i].value=="5" && sexos.value=="2"){
            for(i=0;i<re;i++){
            var hd = document.getElementById("hd")
            hd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.2)*1.9)
            var mmd = document.getElementById("mmd")
            mmd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.9)
            var cd = document.getElementById("cd")
            cd.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.4)*1.9)
            var md = document.getElementById("md")
            md.innerHTML = Math.round(((665+ (9.6*pesoValor) + (1.8*ValorAltura) - (4.7*edadValor))*0.1)*1.9)
            var cen = document.getElementById("cend")
            cend.innerHTML = Math.round(((665 + (9.6*pesoValor) + (1.8*ValorAltura) - (6.8*edadValor))*0.2)*1.9)	
        }
        }
    }
}

function fecha(){
    var fechaHoy = new Date()
    var fecha1 = fechaHoy.toDateString()
    var fecha = document.getElementById("fecha").innerHTML = ("Hora: " + fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds() + "<br><br>")
    var dia = document.getElementById("fecha2").innerHTML = ("Fecha: " +  fecha1.substring(0,3)  + " " + fechaHoy.getDate() + " of " + fecha1.substring(4,7) + ", " + fechaHoy.getFullYear())
}
setInterval(fecha,1000)

function resetear(){
    var t = document.getElementById("t")
    var te = document.getElementById("te")
    te = te.style.display="none"
    t = t.style.display="none"
}

function rutinas(){
    var variable1 = document.getElementById("variable1")
    variable1 = variable1.style.display="block"
    var variable2 = document.getElementById("variable2")
    variable2 = variable2.style.display="block"
    var variable3 = document.getElementById("variable3")
    variable3 = variable3.style.display="block"
}
function rutinas2(){
    var variable1 = document.getElementById("variable1")
    variable1 = variable1.style.display="none"
    var variable2 = document.getElementById("variable2")
    variable2 = variable2.style.display="none"
    var variable3 = document.getElementById("variable3")
    variable3 = variable3.style.display="none"
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="none"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="none"
    var poten = document.getElementById("poten")
    poten = poten.style.display="none"
    var ejerpot = document.getElementById("ejerpot")
    ejerpot = ejerpot.style.display="none"
    var base2 = document.getElementById("base2")
    base2 = base2.style.display="none"
    var mantener = document.getElementById("mantener")
    mantener =  mantener.style.display="none"
    var moderar = document.getElementById("moderar")
    moderar = moderar.style.display="none"
    var potenciar = document.getElementById("potenciar")
    potenciar = potenciar.style.display="none"
    var aerobicos = document.getElementById("aerobicos")
    aerobicos = aerobicos.style.display="none"
    var infoareo = document.getElementById("infoareo")
    infoareo = infoareo.style.display="none"
    var infomadel = document.getElementById("infomadel")
    infomadel = infomadel.style.display="none"
    var ejeradel = document.getElementById("ejeradel")
    ejeradel = ejeradel.style.display="none"
    var tonificar = document.getElementById("tonificar")
    tonificar = tonificar.style.display="none"
    var aeros = document.getElementById("aeros")
    aeros = aeros.style.display="none"
    var adelga= document.getElementById("adelga")
    adelga = adelga.style.display="none"
    var ganar = document.getElementById("ganar")
    ganar = ganar.style.display="none"
    var ejercganar = document.getElementById("ejercganar")
    ejercganar = ejercganar.style.display="none"
}
function mantener(){
    var base2 = document.getElementById("base2")
    base2 = base2.style.display="block"
    var mantener = document.getElementById("mantener")
    mantener =  mantener.style.display="block"
    var moderar = document.getElementById("moderar")
    moderar = moderar.style.display="block"
    var variable4 = document.getElementById("potenciar")
    variable4 = variable4.style.display="block"
    var aerobicos = document.getElementById("aerobicos")
    aerobicos = aerobicos.style.display="none"
    var infoareo = document.getElementById("infoareo")
    infoareo = infoareo.style.display="none"
    var infomadel = document.getElementById("infomadel")
    infomadel = infomadel.style.display="none"
    var ejeradel = document.getElementById("ejeradel")
    ejeradel = ejeradel.style.display="none"
    var tonificar = document.getElementById("tonificar")
    tonificar = tonificar.style.display="none"
    var aeros = document.getElementById("aeros")
    aeros = aeros.style.display="none"
    var adelga= document.getElementById("adelga")
    adelga = adelga.style.display="none"
    var ganar = document.getElementById("ganar")
    ganar = ganar.style.display="none"
    var ejercganar = document.getElementById("ejercganar")
    ejercganar = ejercganar.style.display="none"
}
function moderado(){
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="block"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="block"
    var poten = document.getElementById("poten")
    poten = poten.style.display="none"
    var ejerpot = document.getElementById("ejerpot")
    ejerpot = ejerpot.style.display="none"
}
function potencia(){
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="none"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="none"
    var poten = document.getElementById("poten")
    poten = poten.style.display="block"
    var ejerpot = document.getElementById("ejerpot")
    ejerpot = ejerpot.style.display="block"
}

function bajar(){
    var base2 = document.getElementById("base2")
    base2 = base2.style.display="block"
    var tonificar = document.getElementById("tonificar")
    tonificar = tonificar.style.display="block"
    var aeros = document.getElementById("aeros")
    aeros = aeros.style.display="block"
    var adelga= document.getElementById("adelga")
    adelga = adelga.style.display="block"
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="none"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="none"
    var poten = document.getElementById("poten")
    poten = poten.style.display="none"
    var ejerpot = document.getElementById("ejerpot")
    ejerpot = ejerpot.style.display="none"
    var mantener = document.getElementById("mantener")
    mantener =  mantener.style.display="none"
    var moderar = document.getElementById("moderar")
    moderar = moderar.style.display="none"
    var variable4 = document.getElementById("potenciar")
    variable4 = variable4.style.display="none"
    var ganar = document.getElementById("ganar")
    ganar = ganar.style.display="none"
    var ejercganar = document.getElementById("ejercganar")
    ejercganar = ejercganar.style.display="none"
}
function tonificar(){
var infomadel = document.getElementById("infomadel")
    infomadel = infomadel.style.display="block"
    var ejeradel = document.getElementById("ejeradel")
    ejeradel = ejeradel.style.display="block"
    var aerobicos = document.getElementById("aerobicos")
    aerobicos = aerobicos.style.display="none"
    var infoareo = document.getElementById("infoareo")
    infoareo = infoareo.style.display="none"
}

function aerobicos(){
var infomadel = document.getElementById("infomadel")
    infomadel = infomadel.style.display="none"
    var ejeradel = document.getElementById("ejeradel")
    ejeradel = ejeradel.style.display="none"
    var aerobicos = document.getElementById("aerobicos")
    aerobicos = aerobicos.style.display="block"
    var infoareo = document.getElementById("infoareo")
    infoareo = infoareo.style.display="block"
}

function ganar(){
    var ganar = document.getElementById("ganar")
    ganar = ganar.style.display="block"
    var base2 = document.getElementById("base2")
    base2 = base2.style.display="block"
    var ejercganar = document.getElementById("ejercganar")
    ejercganar = ejercganar.style.display="block"
    var mantener = document.getElementById("mantener")
    mantener =  mantener.style.display="none"
    var moderar = document.getElementById("moderar")
    moderar = moderar.style.display="none"
    var potenciar = document.getElementById("potenciar")
    potenciar= potenciar.style.display="none"
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="none"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="none"
    var poten = document.getElementById("poten")
    poten = poten.style.display="none"
    var moderado = document.getElementById("moderado")
    moderado = moderado.style.display="none"
    var ejercmod = document.getElementById("ejercmod")
    ejercmod = ejercmod.style.display="none"
    var poten = document.getElementById("poten")
    poten = poten.style.display="none"
    var ejerpot = document.getElementById("ejerpot")
    ejerpot = ejerpot.style.display="none"
    var mantener = document.getElementById("mantener")
    mantener =  mantener.style.display="none"
    var moderar = document.getElementById("moderar")
    moderar = moderar.style.display="none"
    var variable4 = document.getElementById("potenciar")
    variable4 = variable4.style.display="none"
}

function peso(){
    var peso1 = document.getElementById("peso1")
    peso1 = peso1.style.display="block"
    var peso2 = document.getElementById("peso2")
    peso2 = peso2.style.display="block"
    var peso3 = document.getElementById("peso3")
    peso3 = peso3.style.display="block"
}
function peso2(){
    var peso1 = document.getElementById("peso1")
    peso1 = peso1.style.display="none"
    var peso2 = document.getElementById("peso2")
    peso2= peso2.style.display="none"
    var peso3 = document.getElementById("peso3")
    peso3 = peso3.style.display="none"
    var sobrepeso = document.getElementById("sobrepeso")
    sobrepeso = sobrepeso.style.display="none"
    var medio = document.getElementById("medio")
    medio = medio.style.display="none"
    var delgado = document.getElementById("delgado")
    delgado = delgado.style.display="none"
    var base3 = document.getElementById("base3")
    base3 = base3.style.display="none"
}

function delgado(){
    var base3 = document.getElementById("base3")
    base3 = base3.style.display="block"
    var delgado = document.getElementById("delgado")
    delgado = delgado.style.display="block"
    var medio = document.getElementById("medio")
    medio = medio.style.display="none"
    var sobrepeso = document.getElementById("sobrepeso")
    sobrepeso = sobrepeso.style.display="none"
}

function medio(){
    var base3 = document.getElementById("base3")
    base3 = base3.style.display="block"
    var delgado = document.getElementById("delgado")
    delgado = delgado.style.display="none"
    var medio = document.getElementById("medio")
    medio = medio.style.display="block"
    var sobrepeso = document.getElementById("sobrepeso")
    sobrepeso = sobrepeso.style.display="none"
}

function sobrepeso(){
    var base3 = document.getElementById("base3")
    base3 = base3.style.display="block"
    var delgado = document.getElementById("delgado")
    delgado = delgado.style.display="none"
    var medio = document.getElementById("medio")
    medio = medio.style.display="none"
    var sobrepeso = document.getElementById("sobrepeso")
    sobrepeso = sobrepeso.style.display="block"
}

function ejercicios(){
    var cardio = document.getElementById("cardio")
    cardio = cardio.style.display="block"
    var flex = document.getElementById("flex")
    flex = flex.style.display="block"
    var postura = document.getElementById("postura")
    postura = postura.style.display="block"
}
function ejercicios2(){
    var postura = document.getElementById("postura")
    postura = postura.style.display="none"
    var flex = document.getElementById("flex")
    flex = flex.style.display="none"
    var cardio = document.getElementById("cardio")
    cardio = cardio.style.display="none"
    var flexi = document.getElementById("flexi")
    flexi = flexi.style.display="none"
    var base1 = document.getElementById("base1")
    base1 = base1.style.display="none"
    var infoflex = document.getElementById("infoflex")
    infoflex = infoflex.style.display="none"
    var card = document.getElementById("card")
    card = card.style.display="none"
    var infocard = document.getElementById("infocard")
    infocard = infocard.style.display="none"
    var post = document.getElementById("post")
    post = post.style.display="none"
    var infopost = document.getElementById("infopost")
    infopost = infopost.style.display="none"
}

function flexibilidad(){
    var flexi = document.getElementById("flexi")
    flexi = flexi.style.display="block"
    var base1 = document.getElementById("base1")
    base1 = base1.style.display="block"
    var infoflex = document.getElementById("infoflex")
    infoflex = infoflex.style.display="block"
    var card = document.getElementById("card")
    card = card.style.display="none"
    var infocard = document.getElementById("infocard")
    infocard = infocard.style.display="none"
    var post = document.getElementById("post")
    post = post.style.display="none"
    var infopost = document.getElementById("infopost")
    infopost = infopost.style.display="none"
}

function cardio(){
    var flexi = document.getElementById("flexi")
    flexi = flexi.style.display="none"
    var base1 = document.getElementById("base1")
    base1 = base1.style.display="block"
    var infoflex = document.getElementById("infoflex")
    infoflex = infoflex.style.display="none"
    var card = document.getElementById("card")
    card = card.style.display="block"
    var infocard = document.getElementById("infocard")
    infocard = infocard.style.display="block"
    var post = document.getElementById("post")
    post = post.style.display="none"
    var infopost = document.getElementById("infopost")
    infopost = infopost.style.display="none"
}

function postura(){
    var flexi = document.getElementById("flexi")
    flexi = flexi.style.display="none"
    var base1 = document.getElementById("base1")
    base1 = base1.style.display="block"
    var infoflex = document.getElementById("infoflex")
    infoflex = infoflex.style.display="none"
    var card = document.getElementById("card")
    card = card.style.display="none"
    var infocard = document.getElementById("infocard")
    infocard = infocard.style.display="none"
    var post = document.getElementById("post")
    post = post.style.display="block"
    var infopost = document.getElementById("infopost")
    infopost = infopost.style.display="block"
}