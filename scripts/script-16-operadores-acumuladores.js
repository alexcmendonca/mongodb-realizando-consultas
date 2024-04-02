// Operadores acumuladores

db.contas.find()

// calculando a média
db.contas.aggregate({
    $group:{
            _id:"$tipo",
                media:{
                    $avg:"$valor"
    }
}})

// retornando o valor máximo
db.contas.aggregate([
  {
    $match: {
      valor: { $type: "double" } // Filtrar documentos onde o campo "valor" é do tipo double
    }
  },
  {
    $group: {
      _id: "$tipo",
      valorMaximo: {
        $max: "$valor"
      }
    }
  }
])

// retornando o valor mínimo
db.contas.aggregate({
    $group:{
            _id:"$tipo",
                valorMinimo:{
                    $min:"$valor"
                }
        }
})

// realizando a contagem total de contas por tipo
db.contas.aggregate({
    $group:{
            _id:"$tipo",
                contagem:{
                    $count:{}
                }
        }
})

// retornando o valor total por tipo de conta
db.contas.aggregate({
    $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }
        }
})

// utilizando dois operadores ao mesmo tempo: Total e Media
db.contas.aggregate({
    $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }, 
                Media:{
                    $avg:"$valor"
        }    
        }
})

//
db.contas.aggregate({
    $match:{tipo:"Conta poupança"}},
        { $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }, 
                Media:{
                    $avg:"$valor"
        }    
        }
})