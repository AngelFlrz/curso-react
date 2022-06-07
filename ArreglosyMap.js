// Arreglos y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

console.log(carrito)

const appContenedor = document.querySelector('#app')

let html = ''
carrito.forEach((producto) => {
 html += `<li>${producto}</li>`
})

appContenedor.innerHTML = html

// .map

const carrito2 = ['Producto 1', 'Producto 2', 'Producto 3']

carrito2.map((producto) => {
 return 'El producto es ' + producto
})

// Object Keys

const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador web',
 edad: 500,
}

console.log(Object.keys(persona))
