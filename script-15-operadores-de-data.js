// operadores de data
// MongoDB trabalha com formato ano-mês-dia
// Fuso horário é o formato universal UTC 

db.clientes.find()

db.clientes.insertOne({
    "nome": "Kauê Breno Alexandre Duarte",
    "cpf": "803.561.553-07",
    "data_nascimento": ISODate("1979-09-01T18:00:00.000-03:00"),
    "genero": "Masculino",
    "profissao": "Operador de máquinas",
    "status_civil": "Casado(a)"
})

// Existem dois parâmetros para trabalhar com datas no MongoDB
// ISODATE() para inserir datas ou data e hora
// new Date() cumpre a mesma função, mas fornece também a data atual do sistema

// inserindo novo cliente passando apenas a data de nascimento
db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": ISODate("1986-10-01"),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"})

db.clientes.find()

// acessando último documentos 
// analisando resultado da data gravada está diferente por causa da diferença do fuso horário
db.clientes.find().sort({$natural:-1}).limit(10)

// inserindo novo cliente com data com horário na 'data_nascimento'
db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": ISODate("1986-10-01T18:00:00.000-03:00"),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"})

db.clientes.find()

// inserindo novo cliente com data_nascimento utilizando data e horário atuais
db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": new Date(),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"})

db.clientes.find()

// Operador year para extrair o ano de uma data
db.clientes.aggregate([
  {
    $project:{
            nome:1,
            ano_nascimento:{
                    $year:"$data_nascimento"
                }
        }
}
])

// Operador month para extrair o mês da data_nascimento
db.clientes.aggregate([
  {
    $project:{
            nome:1,
            mes_nascimento:{
                    $month:"$data_nascimento"
                }
        }
}
])

// Operador dayofweek para extrair o dia da 
db.clientes.aggregate([{
    $project:{
            nome:1,
            diasemana:{
                    $dayOfWeek:"$data_nascimento"
                }
        }
}])

// recebendo informações separando cada item q compõe a data
db.clientes.aggregate([
  {
    $project:{
      data:{
        $dateToParts: { date: "$data_nascimento" } // Converter campo "data_nascimento" para tipo de data
      }
    }
  }
])




