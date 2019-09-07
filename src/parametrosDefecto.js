function registrarUusuario(nombre, pais = "No especificado", correo, telefono = "No especificado") {
 
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUusuario("Carlos", undefined, "correo@correo.com", "23234234"));