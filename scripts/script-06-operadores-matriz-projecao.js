// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Clientes.find()

// retornando documentos que existe a matriz 'seguros'
db.Clientes.find({seguros:{$exists:true}})

// retornando documentos quem exite a matriz 'dependentes'
db.Clientes.find({dependentes:{$exists:true}})

// Operador de matriz: all
// retornando todos os documentos onde o campo 'seguro' tenha presente na lista 'seguro de vida' e 'seguro para carro'
db.Clientes.find({seguros:{$all:["seguro de vida", "seguro para carro"]}})

// Operador de matriz: size
// retornando todos documentos em que existem dois dependentes para cada cliente
db.Clientes.find({dependentes:{$size:2}})

// Operadores de projeção
db.Clientes.find({dependentes:{$size:2}},{dependentes:{$slice:1}})

// renomeando a coleção
db.Clientes.renameCollection('clientes')

db.Contas.renameCollection('contas')

db.Enderecos.renameCollection('enderecos')

// Exercício:
// Retornar da coleção 'clientes' apenas os campos de 'nome' e 'email' com mais de 26 anos
db.Clientes.find({idade:{$gt: 26}}, {nome: 1, email: 1, _id: 0 })