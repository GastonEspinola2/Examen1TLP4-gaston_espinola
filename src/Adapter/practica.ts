class InventarioViejo {
    public addItem(nombre:string): void{
console.log(`Objeto añadido exitosamente: ${nombre}`);
}
}

class AdaptadorInventario{
    constructor(private oldSystem: InventarioViejo) {}
    agregarEquipo(equipo:{aparato:string,color:string,disponibilidad:string}): void {
        const testeo = `${equipo.aparato} - ${equipo.color} - ${equipo.disponibilidad}`
    this.oldSystem.addItem(testeo);
    }
}

const inventarioViejo = new InventarioViejo()
const adaptador = new AdaptadorInventario(inventarioViejo)

adaptador.agregarEquipo({aparato:"Router Cisco",color:"Red",disponibilidad:"Disponible"})