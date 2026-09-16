export default class Usuario { //crear clase llamada usuario, se pone export para poder usarla en otro archivo

    //propiedades:
    id;
    nombre;
    email;
    edad;
    telefono;
    activo;
    //propiedad privada = # adelante
    #password;

    constructor(id, nombre, email, edad, telefono, activo, password) { //crea metodo y los parametros q va a recibir

        //guardar datos dentro del objeto:
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.telefono = telefono;
        this.activo = activo;
        this.#password = password

    }

    static crear(id, nombre, email, edad, telefono, activo = true) { //static = metodo pertenece a la clse usario y no a los objetos
        return new Usuario(id, nombre, email, edad, telefono, activo); //crea y devuelve un usuario nuevo
    }
}
