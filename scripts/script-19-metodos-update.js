// método utilizados para atualizar ou excluir dados dentro das coleções 

db.clientes.find()

// consultando documento
db.clientes.find({"_id": 1})

// atualizando um único documento por vez - adicionando item de seguro
db.clientes.updateOne({'_id' : 1}, {$push:{seguros:'seguro de vida'}})

// renomeando campo da coleção
db.clientes.updateMany({}, {$rename:{"cpf":"CPF"}})

db.contas.find({cpf:"410.436.439-82"})

// atualizando valor dentro do campo 
db.contas.updateOne({cpf:"410.436.439-82"},{$inc:{valor:-2000}})

// Método findAndModify - busca e atuliza um único documento
db.contas.find()

db.contas.find({_id:34})

// opção abaixo para atualizar documento com updateOne
db.contas.updateOne({_id:34},{$unset:{valor:""}})

// opção abaixo para atualizar documento com findAndModify mas por padrão retorna documento 
db.contas.findAndModify({query:{_id:34}, update:{$unset:{valor:""}}})

// atualizando query acima adicionando parâmetro new
db.contas.findAndModify(
    {query:{_id:34}, 
    update:{$inc:{valor:1200}},
    new:true
})

// retornando documentos ordenados com valores abaixo de 500
db.contas.find({valor:{$lt:500}}).sort({valor:1})

// atualiza primeiro documento da lista após filtro e ordenação
db.contas.findAndModify({
    query:{valor:{$lt:500}},
    sort:{valor:1},
    update:{$inc:{valor:1000}},
    new:true
})

db.clientes.find({_id:58})

// atualizando documento com a inclusão do campo 'rua'
db.clientes.findAndModify({
  query:{_id:58},
  update:{$set:{rua:"Rua das flores"} },
  new: true
});

db.contas.find({_id:34})

// utilizando método findOneAndUpdate que permite atualização de campos individuais ou de um conjunto selecionado
db.contas.findOneAndUpdate(
    {_id:34},
    {$set:{valor:5145.86}},
    {returnNewDocument:true}
    )

// utilizando método findOneAndReplace
db.clientes.find({_id:4})

// utilizando método findOneAndReplace que substitui todo o documento pelo novo especificado
db.clientes.findOneAndReplace(
    {_id:4},
    {"nome": "Geraldo Benedito Ian",
    "data_nascimento": ISODate("1977-06-01T18:00:00.000-03:00"),
    "genero": "Masculino",
    "profissao": "Operador",
    "status_civil": "Viúvo(a)",
    "CPF": "845.939.560-05"},
    {projection:{nome:1,profissao:1},
    returnNewDocument:true
})

// consulta na coleção filtrando por valores menores que 100 e ordenando a saída
db.contas.find({valor:{$lt:100}}).sort({valor:1})

// localizando um único documento com valor menor que 100 e excluindo o primeiro localizando com a função sort
db.contas.findOneAndDelete({valor:{$lt:100}},{sort:{valor:1}})

// 