// Operadores de condicional

db.clientes.find()

db.contas.find()

// utilizando condicional
db.contas.aggregate([{
   $project:{
         cpf:1,
             tipo:1,
             valores:{
                 $cond:[{$gte:["$valor",8000]}, "VERDADEIRO", "FALSO"]
             }
        }
}])

// utilizando condicional
db.contas.aggregate([{
   $project:{
         cpf:1,
             tipo:1,
             valor:1,
             valores:{
                 $cond:[{$gte:["$valor",8000]}, "VERDADEIRO", "FALSO"]
             }
        }
}])

// tratando campo vazio com ifNull
db.contas.aggregate([{
    $project:{
        valores:{
            $ifNull: [ "$valor", "Não especificado" ]
        }
    }
}])

// outra solução para tratar campo vazio
db.contas.aggregate([
  {
    $project:{
      valor:{
        $cond: {
          if: { $eq: [ "$valor", "" ] }, // Verifica se o campo "valor" está vazio
          then: "Não Especificado", // Retorna "Não Especificado" se estiver vazio
          else: "$valor" // Retorna o valor atual do campo "valor" se não estiver vazio
        }
      }
    }
  }
])

// Operador switch
db.contas.aggregate([
  {
    $project: {
      valor: 1,
      condicao: {
        $switch: {
          branches: [
            {
              case: { $or: [ { $lte: ["$valor", 3000] }, { $eq: ["$valor", ""] } ] }, // Verifica se o valor é menor ou igual a 3000 OU se está em branco
              then: "valor abaixo do esperado"
            },
            {
              case: {
                $and: [
                  { $gt: ["$valor", 3000] },
                  { $lte: ["$valor", 6000] }
                ]
              },
              then: "valor na media"
            }
          ],
          default: "valor acima do esperado"
        }
      }
    }
  }
])