// outros estágios de agregação

use "showbank"

db.clientes.find()

// limit 
// especificando a qtde de documentos queremos de retorno 
db.clientes.find().limit(10)

// utilizando método agreggate com 'limit()'
db.clientes.aggregate({$limit: 5})

// skip
// retornando documentos a partir do 10
db.clientes.find().skip(10)

// utilizando método agreggate com 'skip()'
db.clientes.aggregate({$skip: 5})

// retornando registros ordenados de forma crescente pelo campo 'nome'
db.clientes.find().sort({nome:1})

// utilizando método aggregate com 'sort()'
db.clientes.aggregate({$sort: {nome:-1}})

// utilizando 2 estágios juntos
db.contas.aggregate([{$skip:15}, {$limit:10}])

// utilizando 3 estágios de pipeline
db.contas.aggregate([
    {$limit:10}, 
    {$skip:5},
    {$sort: {valor:-1}}
    ])