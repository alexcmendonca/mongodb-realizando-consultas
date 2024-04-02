// operadores aritméticos

db.clientes.find()

// retornando documentos com campo temporário 'valor' se seu conteúdo um número aleatório
db.clientes.aggregate({
    $project:{
        _id:0,
        valor: {$rand:{}}
    }
})

// arrendondando valor para números com três casas decimais
db.clientes.aggregate({
    $project:{
        _id:0,
        valorRound: {
            $round: [{
                $rand:{}
            },3]
        }
    }
})

// exibindo até a terceira casa decimal
db.clientes.aggregate({
    $project:{
        _id:0,
        valorTrunc: {
            $trunc: [{
                $rand:{}
            },2]
        }
    }
})

// código com dois estágios de pipeline para operação de divisão
// estágio $match para filtrar documentos onde o campo 'valor' não é uma string vazia
// estágio $project de agregação que realiza duas operações: 1-retirar o campo _id do resultado
// e depois converte o campo 'valor' para tipo double e conseguir para conseguir aplicar operação de divisão
db.contas.aggregate([
    {
        $match: {
            valor: { $ne: "" } // Filtrar documentos onde o campo "valor" não é uma string vazia
        }
    },
    {
        $project:{
            _id:0,
            valor: { $toDouble: "$valor"},
            dividido:{
                $divide:["$valor",2]
            }
        }
    }
    ])
    
    // operação de multiplicação
    db.contas.aggregate([
    {
        $match: {
            valor: { $ne: "" } // Filtrar documentos onde o campo "valor" não é uma string vazia
    }
    },
        {
        $project: {
            _id:0,
            valor:1,
            multiplicado:{
                $multiply:["$valor",2]
            }
        }
    }])