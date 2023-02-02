// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
//
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
//
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const datosPersonales = ["Edgardo", 25, true, new Date(1983,0,25)];
console.log(datosPersonales);

const datosPersonales1 = [
    "Edgardo",
    25,
    true,
    new Date(1983,0,25),
    {
        nombre: "Asi hablo zarathustra",
        autor: "Nietzsche",
        fecha: new Date(1883, 0, 1 ),
        url: "https://es.wikipedia.org/wiki/As%C3%AD_habl%C3%B3_Zaratustra"
    }
]

console.log(datosPersonales1);

const misDatos = {
    nombre: "Edgardo",
    edad: 25,
    esDesarrollador: true,
    fechaDeNacimiento: new Date(1983, 0, 25 ),
    libroFavorito: {
        nombre: "Asi hablo zarathustra",
        autor: "Nietzsche",
        fecha: new Date(1883, 0, 1 ),
        url: "https://es.wikipedia.org/wiki/As%C3%AD_habl%C3%B3_Zaratustra"
    }
}

console.log(misDatos);

const libro = {
    nombre: "Asi hablo zarathustra",
    autor: "Nietzsche",
    fecha: new Date(1883, 0, 1 ),
    url: "https://es.wikipedia.org/wiki/As%C3%AD_habl%C3%B3_Zaratustra"
}

console.log(libro);