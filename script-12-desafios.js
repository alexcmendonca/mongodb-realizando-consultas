// desafios

db.clientes.find()

// buscar na coleção endereços documentos da cidade igual a Aracaju
db.enderecos.aggregate({ 
    $match: { cidade:{ $eq:"Aracaju"}} 
})

// buscar 5 primeiros documentos onde tipo da conta é igual a conta 
db.contas.aggregate([ 
    { $match: { tipo:{ $eq:"Conta corrente"}} },
    {$limit:5}
])

// realizando a contagem de clientes por profissão
db.clientes.aggregate([
    { $group: { _id: "$profissao", contagem: { $count: {} } } }
])

// calculando a qtde de pessoas com a profissão 'Analista de sistemas'
db.clientes.aggregate( [
  { $match: { profissao:{ $eq:"Analista de sistemas"}} },
  {$group:{_id:"$profissao",contagem:{$count:{}}}}
] )

// retornando os campos de nome e status civil da coleção de clientes, para os 5 primeiros documentos
// onde status civil é igual a 'solteiro(a)' e a saída deve ser ordenada pelo nome dos clientes.
db.clientes.aggregate([ 
    {$match:{status_civil:"Solteiro(a)"}}, 
    {$limit:5}, 
    {$sort:{nome:1}}, 
    {$project:{_id:0, nome:1, status_civil:1}},
])

// buscar na coleção de contas os documentos com tipo = salário ou valor seja menor que 2000
// e retornando apenas o campo cpf, tipo e valor ordenados pelo campo de valor
db.contas.aggregate( [
  { $match: { $or: [ { tipo: { $eq:"Conta salário" } }, { valor: { $lt: 2000 } } ] } },
  {$project:{_id:0, cpf:1, tipo:1, valor:1}},
  {$sort:{valor:1}}
] )