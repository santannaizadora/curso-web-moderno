const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //As alteraçoes em A afetam B tambem

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // As alteracoes em C aferam apenas ele mesmo