interface Order{
detalles(): void;
}

class Servidor implements Order{
constructor(private equipo:string){}
detalles(): void {
console.log(`Servidor creado correctamente ${this.equipo}`)
}
}

class Notebook implements Order{
constructor(private equipo:string){}
detalles(): void {
console.log(`notebook creada correctamente ${this.equipo}`)
}
}

class EquipoFactory{
public crearEquipo(tipo:string,data:string,ram:string,marca:string): Order{
if(tipo === 'Servidor'){
return new Servidor(data)
}else if (tipo === 'Notebook'){
return new Notebook(data);
}
throw new Error('No se conoce el tipo de orden');
}
}

const factory = new EquipoFactory()

const server = factory.crearEquipo("Servidor","dell power","32ram","Lenovo")

console.log(server.detalles())