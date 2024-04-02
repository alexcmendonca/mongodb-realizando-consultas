// operadores de comparação

// $eq: operador "igual a" 
// $gt: operador "maior que" 
// $gte: operador "maior ou igual a"
// $lt: operador "menor que"
// $lte: operador "menor ou igual a"

// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Clientes.find()

// consulta sem operador de comparação 
// retornando todos documentos da coleção 'Clientes' onde o campo é igual a 'Masculino'
db.Clientes.find({ genero:'Masculino'})

// consulta com operador de igualdade '$eq'
// retornando todos documentos da coleção 'Clientes' onde o campo é igual a 'Masculino'
db.Clientes.find({genero:{$eq: 'Masculino'}})

// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Contas.find()

// consulta com filtro - operador 'maior que'
db.Contas.find({valor:{$gt:9000}})

// consulta com filtro - operador 'menor que'
db.Contas.find({valor:{$lt:1000}})

db.Clientes.find()

// consulta buscando todos documentos da coleção com status civil igual 'Viúvo(a)" ou "Casado(a)'
db.Clientes.find({status_civil:{$in:["Viúvo(a)","Casado(a)"]}})

