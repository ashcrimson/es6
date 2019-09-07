const usuario = {
    nombre: "Carlos",
    correo: "correo@corre0.com",
    edad: 22,
    pais: "México",
   
}

const {nombre, pais, profesion = "No especificado"} = usuario;

const mostrarInfo = ({ nombre, profesion = "Estudiante" }) => console.log(`${nombre} es ${profesion}`);


mostrarInfo(usuario);