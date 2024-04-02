// desafios - parte 02

db.clientes.find()

// Utilizando a nossa coleção de contas, crie uma consulta que calcule a média 
// de valores para cada tipo de conta existente.
db.contas.aggregate({
         $group:{
             _id:"$tipo",
             MediaValores:{
                 $avg:"$valor"}}
})

// Realizando uma consulta na nossa coleção de contas, retorne a contagem de quantos 
// documentos possuem o valor maior que 7000
db.contas.aggregate([
    { $match: { valor: { $gt: 7000 } }   },
    { $count: "total"  }
]);

// Busque na coleção de clientes, apenas os documentos onde o status_civil é igual a Divorciado(a), 
// retornando apenas as informações de nome e ano da data de nascimento de cada cliente.
db.clientes.aggregate([
    {$match:{status_civil:"Divorciado(a)"}},
    {$project:{
        nome:1,
        ano_nascimento:{
            $year:"$data_nascimento"        }
    }}])
    
// Realize uma consulta na coleção de endereços, onde como resultado, você deve retornar 
// o endereço completo do cliente em um único campo
db.enderecos.aggregate({
    $project:{
        endereco_completo:{
            $concat:[
                 "O cliente com id ",{$toString:"$_id"}," possui o endereço: ","$rua"," ",{$toString:"$numero"}," ", "$bairro"," ","$cidade"," - ","$estado"
            ]
        }    }
})

// Retorne da coleção de clientes as informações de CPF e o nome completo em um único campo, 
// onde o gênero seja igual a feminino e o status civil seja igual a casada. Ordene a saída pelo nome.
db.clientes.aggregate([
    { $sort: { nome: 1 } },
    { $match: { 
        $and: [ 
            { genero: { $eq: "Feminino" } }, 
            { status_civil: { $eq: "Casado(a)" } } 
        ] 
    } },
    { $project: {
        Informações: { 
            $concat: [
                "A cliente: ", "$nome", ", CPF: ", "$CPF", " é ", "$status_civil"
            ]
        }
    } }
])