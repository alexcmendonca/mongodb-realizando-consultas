// comandos para serem executados com o 'mongoimport'
// importando dados do arquivo CSV para banco de dados do MongoDB
--db=showbank --collection=Contas --type=csv --headerline --file=C:\Users\ludmi\OneDrive\Documentos\NoSQLBooster\localhost\consultas\projeto\Contas.csv

// importando dados do arquivo CSV para banco de dados do MongoDB
--db=showbank --collection=Endereco --type=csv --headerline --file=C:\Users\ludmi\OneDrive\Documentos\NoSQLBooster\localhost\consultas\projeto\Endereco.csv

// importando dados do arquivo JSON com parâmetro 'jsonArray' para banco de dados do MongoDB
--db=showbank --collection=Clientes --file=C:\Users\ludmi\OneDrive\Documentos\NoSQLBooster\localhost\consultas\projeto\Clientes.json --jsonArray
