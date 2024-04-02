// trabalhando com $lookup

// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.clientes.find()

// realizando consulta e retornando todos os documentos na coleção 'Contas'
db.contas.find()

// utilizando 'lookup' para executar uma junção externa à esquerda com duas coleções
db.clientes.aggregate([{
    $lookup: {
           from: "contas",
           localField: "cpf",
           foreignField: "cpf",
           as: "clientes_contas"
         }
}])

// utilizando 'lookup' para executar uma junção externa à esquerda com duas coleções
// excluíndo os campos que não devem retornar na consulta
// limitando o retorno a apenas 5 documentos
db.clientes.aggregate([{
    $lookup: {
           from: "contas",
           localField: "cpf",
           foreignField: "cpf",
           as: "clientes_contas"
         }},
         {$project:{_id:0, data_nascimento:0, genero:0, profissao:0}},
         {$limit:5}
         ])