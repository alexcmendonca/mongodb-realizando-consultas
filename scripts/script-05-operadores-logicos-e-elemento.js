// Operador lógico: and

// acessando banco de dados
use 'showbank'

// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Clientes.find()

// consultando documentos com tipo de conta 'salário' e 'valor' acima de 9000
db.Contas.find({$and:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})

// Operador de comparação: or
db.Contas.find({$or:[{tipo:{$eq:"Conta salário"}},{valor:{$gt:9000}}]})

// realizando consulta e retornando todos os documentos na coleção 'Enderecos'
db.Enderecos.find()

// Operador de comparação: not
// retornando todos os documentos com estados que não sejam de São Paulo
db.Enderecos.find({estado:{$not:{$eq:"SP"}}})

// Operadores de elemento
// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Clientes.find()

// Operador de elemento: exists
// retornando documentos em que o campo de 'dependentes' não existe
db.Clientes.find({dependentes:{$exists:false}})

// retornando documentos em que o campo 'dependentes' existe 
db.Clientes.find({dependentes:{$exists:true}})

// Operador de elemento: type
// No MongoDB, é possível conferir que além de utilizarmos os tipos pelo seu apelido/nome,
// como "string", "booleano", "numérico", é possível tb utilizar o número.
db.Clientes.find({seguros:{$type:2}})

