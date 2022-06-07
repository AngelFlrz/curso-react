// Destructuring de objetos

const aprendiendoJS = {
 version: {
  nueva: 'ES6',
  anterior: 'ES5',
 },
 frameworks: ['React', 'VueJS', 'AngularJS'],
}

// Destructuring es extraer valores de un objeto

console.log(aprendiendoJS)

// version anterior

let version = aprendiendoJS.version.nueva
let framework = aprendiendoJS.frameworks[1]
console.log(framework)

// Destricturing forma nueva
let { anterior } = aprendiendoJS.version
console.log(anterior)
