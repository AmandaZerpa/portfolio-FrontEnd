export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    descripcion: String;
    img: String;

    constructor(nombre: String,apellido: String, email: String,
    descripcion: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.descripcion = descripcion;
        this.img = img;
    }
}