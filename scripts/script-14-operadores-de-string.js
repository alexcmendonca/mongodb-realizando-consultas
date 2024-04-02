// operadores de string 

// retornando 1 documento da coleção 'clientes'
db.clientes.find().limit(1)

// concatenando o texto com o nome dos clientes com cpf
db.clientes.aggregate([{
    $project:{
        _id:0,
        descricao:{
        $concat:["$nome", " - ", "$cpf"]
        }
    }
}])

// separando string em uma matriz por um delimitador
db.clientes.aggregate([{
    $project:{
        _id:0,
        descricao:{
        $split:["$nome", " ",]
        }
    }
}])

// converter texto em minúsculas
db.clientes.aggregate([{
    $project:{
            descriçao:{
                $toLower:"$nome"
                }
        }
}])

// converter texto em maiúsculas
db.clientes.aggregate([{
    $project:{
            descriçao:{
                $toUpper:"$nome"
                }
        }
}])

// realizando consulta e retornando todos os documentos na coleção 'contas'
db.contas.find()

// convertendo campo 'valor' de double para string
db.contas.aggregate({
   $project:{
         valor:{
                 $toString:"$valor"
             }
      }
})

// concatenando strings e convertendo variável do tipo double para string
db.contas.aggregate({
    $project:{
            descrição:{
                    $concat:[
                             "O cliente de CPF ", "$cpf", " possui o valor de ", {$toString:"$valor"}, " na", "tipo"
                                 
                                ]
                }
      }
})



