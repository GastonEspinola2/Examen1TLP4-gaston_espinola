interface Observador {
cambiarEstado(estado:string):void
}

class Equipo implements Observador{
constructor(private nombre:string){}

cambiarEstado(estado: string): void {
console.log(`${this.nombre} ha sido notificado/a correctamente, estado del pedido: ${estado}`)
}
}

class Soporte {
private observadores:Observador[] = [];
private estado!:string

addObserver(observador:Observador):void{
this.observadores.push(observador)
}

deleteObserver(observador:Observador):void{
this.observadores = this.observadores.filter(obs => obs !== observador)
}

updateStatus(nuevoEstado:string):void{
this.estado = nuevoEstado;
this.notificarObservadores();

}

private notificarObservadores():void{
this.observadores.forEach(obs => obs.cambiarEstado(this.estado))
}
}

const order = new Soporte();

const equipo1 = new Equipo('Notebook HP')
const equipo2 = new Equipo('Portatil')

order.addObserver(equipo1)
order.addObserver(equipo2)
equipo1.cambiarEstado("En reparacion")