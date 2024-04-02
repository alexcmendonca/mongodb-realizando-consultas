// Trabalhando com MongoDB utilizando NoSQLBooster
// criando/acessando banco de dados
use "showbank"

// explorando banco de dados
// consultando versão do banco de dados
db.version()

// verificando informações da máquina onde o MongoDB está instalado
db.hostInfo()

// buscando o nome do banco de dados ativo
db.getName()

// recuperando informações sobre o banco de dados
db.stats()

// consultando quais os métodos disponíveis para executar consultas no MongoDB
db.listCommands()