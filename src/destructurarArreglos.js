const persona = ["Carlos Arturo", 23, "México"];

const [nombre, , pais, profesion = "No especificado"] = persona;

const mostrarInfo = ([nombre, ,pais, profesion="No especificado"] = persona) =>  console.log(nombre, profesion);

mostrarInfo(persona);