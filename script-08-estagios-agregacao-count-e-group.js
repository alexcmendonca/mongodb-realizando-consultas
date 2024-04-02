// Pipeline de agregação e seus estágios que processam os documentos

// consultando coleções
db.clientes.find()

db.contas.find()

// Estágio count

// como método find() e com cursor de modificação
db.clientes.find().count()

// como método
db.clientes.count()

// com o método aggregate 
db.clientes.aggregate({$count: "contagem de clientes"})

// Estágio group

// primeiro estágio com apenas agrupamento
db.contas.aggregate({$group:{_id:"$tipo"}})

// segundo estágio com agrupamento e contagem dos documentos
db.contas.aggregate({$group:{_id:"$tipo", contagem:{$count:{}}}})

// Código utilizando os estágios $count e $group juntamente com o método aggregate 
// para consultar a coleção 'cliente' e retornar a quantidade de vendas por cliente.
db.vendas.aggregate([{    
    $group: {
        _id : "$id_cliente",
        quantidade: { $count:{} }    } }])
