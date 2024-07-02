var valido = /^\D+$/
function novaler(){
    var re = document.getElementById("re")
    if(valido.test(re.value)){
        alert("NOMBRE DE USUARIO VALIDO")
        re = re.style.borderColor="grey"
    }
    else{
        var re = document.getElementById("re")
        alert("NOMBRE DE USUARIO NO VALIDO: Vuelve a poner el usuario")
        re.focus()
        re = re.style.borderColor="red"
    }
}
function envio()
{

    if(document.getElementById("re").value=="" || valido.test(re).value)
    {
        var elemento = document.getElementById("re")
        elemento = elemento.style.borderColor="red"
        document.getElementById("re").innerHTML = ""
       alert("DEBES PONER EL NOMBRE DE USUARIO: Vuelve a poner los datos");
        
    }
    if(document.getElementById("mi").value=="")
    {
        var elemento = document.getElementById("mi")
        elemento = elemento.style.borderColor="red"
        document.getElementById("mi").innerHTML = ""
        alert("DEBES PONER LA CONTRASEÑA: Vuelve a poner los datos");
    }
    if(document.getElementById("re").value!=="" && document.getElementById("mi").value!=="")
    {
        var nombre = document.getElementById("re")
        alert("Has iniciado sesión correctamente usuario: " + nombre.value);
        return document.getElementById("enviar").type="submit"
    }
}
function info(){
    alert("El nombre del buscador es: " + navigator.appCodeName + "\nVersión del buscador: " + navigator.appVersion + "\nIdioma del buscador: " + navigator.language)
    alert("El valor de la altura disponible de tu pantalla es: " + screen.availHeight + " y  el ancho disponible es: " + screen.availWidth + "\nLa profundidad de la paleta de colores es: " + screen.colorDepth + " y la resolución es: " + screen.pixelDepth)
}