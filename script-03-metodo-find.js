// utilizando comandos do método find

// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.Clientes.find()

// retorna o primeiro documento na coleção 'Clientes'
db.Clientes.findOne()

// realizando consulta e retornando todos os documentos na coleção 'Contas'
db.Contas.find()

// realizando consulta e retornando todos os documentos na coleção 'Endereco'
db.Endereco.find()

// renomeando nome da coleção
db.Endereco.renameCollection("Enderecos")

