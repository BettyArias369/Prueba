function saludar(){
    alert("¡Hola!, bienvenido")

}

function saludo_personal(){
    var name;
    name=prompt("Ingresa tu nombre:")

    alert("¡Hola! "+name)
    
}

function hacer_reto(){
    var res=0;
    res=prompt("¿Cuánto es 7 x 8 ?")

    //Sí el resultado es correcto
    if (res==56){
        alert("¡FELICIDADES! RESPUESTA CORRECTA")
    }
    //Si no respondió correctamente
    else{
        alert("¡ERROR!")
    }

}