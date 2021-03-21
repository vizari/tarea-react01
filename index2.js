

class SerVivo{
    caminar(nombre){
        console.log('Ahora esta caminando: ' + this.nombre);
    }
}

class Persona extends SerVivo{
    constructor(nombre){
        super()
        this.nombre =nombre;    
    }
    moverse(){
       this.caminar()
    }
}

const mostrarCaminar = new Persona('Juanito');
mostrarCaminar.moverse()

