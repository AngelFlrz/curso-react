// Spread operator ...

let lenguajes = ['JavaScript', 'PHP', 'Python']
let frameworks = ['ReactJS', 'Laravel', 'Django']

// unir los arreglos en 1 solo

// Antigua
let conbinacion = lenguajes.concat(frameworks)

console.log(conbinacion)

// nueva
let conbinacion2 = [...lenguajes, ...frameworks]

console.log(conbinacion2)

// Nuevo arreglo

let [ultimo] = lenguajes.reverse()

lenguajes.reverse()
// con spread

let [ultimoSpread] = [...lenguajes].reverse()

console.log(lenguajes)
console.log(ultimo)

// uso de spread

function suma(a, b, c) {
 console.log(a + b + c)
}

const numeros = [1, 2, 3]

suma(...numeros)
