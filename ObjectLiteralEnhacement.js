// Object literal enhacement
const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman']

// Forma anterior

/* const metallica= {
    banda: banda,
    genero: genero,
    canciones: canciones
} */

console.log(metallica)

// forma nueva
const metallica = { banda, genero, canciones }

console.log(metallica)
