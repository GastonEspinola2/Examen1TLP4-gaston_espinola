class Configuracion{
private static instance:Configuracion;

private tipo:{[estado:string]:string} = {}

private constructor() {}

public static getInstance(): Configuracion{
if (!Configuracion.instance){
Configuracion.instance = new Configuracion();
} return Configuracion.instance;
}

public set(tipo:string,estado:string):void{
this.tipo[tipo] = estado;
}

public get(tipo:string):string | undefined{
return this.tipo[tipo]
}
}

const conf1 = Configuracion.getInstance()
const conf2 = Configuracion.getInstance()

conf1.set("Modo","produccion")

console.log(conf2.get("Modo"))