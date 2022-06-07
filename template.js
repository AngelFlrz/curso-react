// Template Strings

const nombre = 'Juan'
const trabajo = 'Desarrollador Web'

//  concatenar javascript

console.log('nombre: ' + nombre + 'trabajo: ' + trabajo)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)

// concatenar multiples lineas

let html = `
<ul>
<li>Nombre:${nombre} </li>
<li>Trabajo:${trabajo} </li>
</ul>
`
app.innerHTML = html
