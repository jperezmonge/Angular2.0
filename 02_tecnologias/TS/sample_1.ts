interface Usuario{
    id: number,
    name: String,
    direccion: {
        calle: string,
        num: number,
        zip: string
    },
    formacion: Array<String>
}

export class Empleado{
    private nombre: string;
    private salario: number;
    public aUsuarios: Array<String>;
    public aDatos: string[];
    public oVacio{};
    public oUser: Usuario;

    contructor(nombre: string, salario: number){
        this.nombre = nombre;
        this.salario = salario;
    }

    getNombre(){
        return this.nombre;
    }

    toString(){
        return "Nombre:" + this.nombre +
        "Salario: " + this.salario;
    }
}