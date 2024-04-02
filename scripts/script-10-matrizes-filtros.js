// realizando consulta e retornando todos os documentos na coleção 'Clientes'
db.clientes.find()

// consultando quais são os clientes que possuem alguma matriz em seu documento 
db.clientes.find({seguros:{$exists:true}})

// desconstruindo a matriz que possuem mais de 2 elementos no seguro
db.clientes.aggregate([{$unwind:"$seguros"}])

// realizando contagem por gênero para clientes com seguro 
db.clientes.aggregate([{$unwind:"$seguros"}, {$sortByCount:"$genero"}])

// aplicando filtro na coleção de endereço com cidade igual a 
db.enderecos.aggregate([{$match:{cidade:"Recife"}}])

// filtrando documentos onde conta é do tipo = 'salario' e valor maior que '3500'
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}}
    ])
    
// filtrando documentos onde conta é do tipo = 'salario' e valor maior que '3500'
// incluindo a contagem por //Double quotes quote object names (e.g. "field"). Single quotes are for strings 'string'
db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}},
    {$group:{_id:"$tipo",contagem:{$count:{}}}}
    ])