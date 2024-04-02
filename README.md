# MongoDB: Realizando Consultas

## 💡Objetivos
Explorar a manipulação de dados em coleções no MongoDB, abrangendo uma variedade de métodos e operadores relevantes para esse fim específico.

###### Imagem 1: MongoDB é um banco de dados NoSQL baseado em documentos
<img src="/img/mongodb.png">


## 🖥️Desafios do Projeto
Explorar e aplicar uma variedade de técnicas e ferramentas para manipulação de dados em um ambiente MongoDB. Utilizando ferramentas como MongoDB Compass, NoSQLBooster e MongoImport.

Primeiramente, será criado um novo banco de dados e utilizando o MongoImport para importar os conjuntos de dados, populando assim o banco com informações relevantes.

Em seguida, desenvolver consultas avançadas, explorando os operadores do método find(), incluindo operadores de comparação, lógicos, de elementos e de matriz. Utilizando também os modificadores, como o modificador limite, para controlar a quantidade de documentos retornados nas consultas.

Aplicar métodos como count(), distinct() e aggregate(), que oferece uma flexibilidade adicional para manipular e agregar os dados. Entender os estágios do método aggregate(), como $group, $count e $lookup, e utilizar seus operadores, incluindo operadores de string, data e lógicos.

Por fim, abordar métodos de modificação de dados, como updateOne(), findAndModify(), findOneAndDelete(), findOneAndReplace() e findOneAndUpdate(), permitindo atualizar, modificar e gerenciar nossos dados de forma eficiente.

Este repositório oferece uma oportunidade de aprimorarhabilidades em manipulação de dados NoSQL e explorar todo o potencial do MongoDB.

###### Imagem 2: Pipelines de agregação dos documentos (Crédito da imagem: Alura)
<img src="/img/pipeline-de-agregacao.png">


## 📄Conhecimentos Desenvolvidos
|Atividades|Realizadas |
|----------|-----------|
| Executar comandos de banco de dados | Conhecer e instalar o MongoDBimport |
| Realizar a importação de arquivos com o MongoDBimport | Relembrar a utilização do método find |
| Utilizar os operadores de comparação | Estudar os operadores lógicos e de elemento |
| Executar consultas com os operadores de matriz e projeção | Utilizar modificadores e outros métodos |
| Utilizar o método aggregate e os estágios de agregação | Executar consultas com os estágios count e group |
| Criar consultas com matrizes e filtros | Realizar junção de coleções com o Lookup |
| Executar consultas utilizando o grupo de operadores aritméticos | Conhecer os operadores de string |
| Estudar sobre os operadores de datas | Realizar consultas com os operadores acumuladores |
| Criar novas consultas utilizando os operadores de condicional | Criar consultas com o método updateOne |
| Conhecer o método findAndModify | Estudar os métodos findOneAndUpdate, findOneAndReplace e findOneAndDelete |

##  🗂️Organização dos Arquivos

1. obter_info_do_banco.js: Conexão ao MongoDB e obtenção de informações sobre o banco de dados e suas coleções.
2. mongo_import.js: Utilização do Mongo Import para importar conjuntos de dados para o banco MongoDB.
3. metodo_find.js: Demonstração do método find() para realizar consultas básicas em uma coleção.
4. operadores_comparacao.js: Exploração dos operadores de comparação ($eq, $ne, $gt, $lt) para filtrar documentos.
5. operadores_logicos_e_elemento.js: Utilização de operadores lógicos ($and, $or, $not) e de elemento ($exists, $type) em consultas.
6. operadores_matriz_e_projecao.js: Uso de operadores de matriz ($in, $all, $elemMatch) e projeção de campos em consultas.
7. modificadores_e_metodos.js: Apresentação de modificadores como $set, $unset e métodos como updateOne(), deleteOne().
8. estagios_agregacao_com_count_e_group.js: Introdução à agregação com estágios como $match, $group e $count para contagem e agregação de dados.
9. outros_estagios_agregacao.js: Exploração de estágios como $sort, $limit, $skip e $lookup em operações de agregação.
10. matrizes.js: Manipulação de dados em matrizes com operadores específicos.
11. filtros.js: Aplicação de filtros avançados em consultas MongoDB.
12. lookup.js: Utilização do estágio de agregação $lookup para junção de coleções.
13. operadores_aritmeticos_strings_e_data.js: Uso de operadores aritméticos e de manipulação de strings e datas.
14. operadores_acumuladores_e_condicional.js: Demonstração de operadores acumuladores e condicionais em consultas.
15. metodos_update.js: Utilização dos métodos updateOne(), findOneAndUpdate() para atualização de documentos.

###### Imagem 3: Importação através do *prompt* de comando com MongoImport
<img src="/img/linha-de-comando-mongoimport.png">

## 🔍Referências
- [Alura](https://www.alura.com.br/)