// Prototypes

// Object Constructor

function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

// Agregar Prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

// crear una nueva tarea

const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente')

const tarea2 = new Tarea('Preparar café', 'Urgente')

console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())

console.log(tarea2)
console.log(tarea2.mostrarInformacionTarea())
