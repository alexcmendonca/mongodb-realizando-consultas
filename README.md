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
<img src="/img/pipeline-de-agregacao.jpeg">


## 📄Conhecimentos Desenvolvidos
|Atividades|Realizadas |
|----------|-----------|
| A importância de modelar um projeto de banco de dados | Transações ACID. |
| MongoDB trabalhando com transações ACID. | Estrutura de dados incorporados e referências. |
| Documentos utilizando a estrutura de dados incorporados. | Documentos utilizando as referências manuais e DBRefs. |
| Utilizando variáveis para armazenar o objectID e referenciar documentos. | MongoDB no Visual Studio Code. |
| Relacionamentos em banco de dados: relacionais e não relacionais. | Padrão de operações atômicas. |
| Criar documentos com relacionamento do tipo: | um para um documentos incorporados |
| um para muitos documentos incorporados; e | um para muitos referências de documentos. |
| Conhecer a estrutura de árvore. | Aplicação do padrão de controle de versão de esquema. |
| Padrões de: | referência pai para criar documentos;
| referência filho; | array de ancestrais; |
| caminhos materializados. | Padrão de conjuntos aninhados. |
| Estuando padrão referência estendida. | |

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