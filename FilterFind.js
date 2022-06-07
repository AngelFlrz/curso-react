// metodos en arreglos

const personas = [
 { nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript' },
 { nombre: 'Pablo', edad: 18, aprendiendo: 'PHP' },
 { nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD' },
 { nombre: 'Caren', edad: 30, aprendiendo: 'JPhyton' },
 { nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS' },
]

console.log(personas)

// mayoreas de 28 años

personas.filter((persona) => {
 return persona.edad > 28
})
console.log(mayores)

// que aprende alejandra y su edad

const alejandra = personas.find((personas) => {
 return persona.nombre === 'Alejandra'
})

// console.log("Alejandra esta aprendiendo: "+alejandra.aprendiendo)

let total = personas.reduce((edadTotal, persona) => {
 return edadTotal + persona.edad
}, 0)

console.log(total)
