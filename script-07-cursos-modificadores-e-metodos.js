// Cursores de modificação

// Cursor de modificação: limit
// retornando 5 documentos da coleção 'contas'
db.contas.find().limit((5))

// Cursor de modificação: skip
db.contas.find().skip(200)

// retornando 5 documentos a partir do documento 200
db.contas.find().limit(5).skip(200)

// Cursor de modificação: sort
// retornando consulta de forma crescente
db.clientes.find().sort({nome:1})

// Cursor de modificação: count
// realizando a contagem de todos os documentos na coleção 
db.clientes.find().count()

// Método distinct
db.contas.distinct("tipo")