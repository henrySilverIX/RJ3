# RJ1

## Construindo objetos
Você já sabe, os objetos são reis! Se você entende de objetos,
entende JavaScript. Então, nada melhor que praticar a codificação de
construção de objetos.
Nesta atividade, você deve praticar a construção de objetos que
precisam de atributos privados. Além disto, também praticar o
codificação dos métodos get e set.
Esta atividade será dividia em três partes de objetivos!


### Cadastro de clientes...
Imagine que você foi contratado(a) para desenvolver um script que
possa criar objetos dos tipos empresa, cliente, telefone e endereço.
O script deve ser desenvolvido com base nos exemplos em seguida...

### Cliente
O cpf de um cliente deve ser algo que não pode mudar, após sua
criação. Portanto, o atributo deve ser privado.<br>
class Cliente{<br>
    #cpf<br>
    constructor(nome, cpf, endereco){<br>
        this.nome = nome<br>
        this.endereco = endereco<br>
        this.telefones = new Set()<br>
        this.#cpf = cpf<br>
    }<br>
}<br>
Um cliente pode ter uma lista de telefones, que pode crescer
ou diminuir.

### Telefone
A classe telefone não deve possuir atributos privados.<br>
class Telefone(){<br>
    constructor(ddd, numero){<br>
        this.ddd = ddd<br>
        this.numero = numero<br>
    }<br>
}<br>
Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

### Endereço
A classe endereço não deve possuir atributos privados.<br>
class Endereco{<br>
    constructor(estado, cidade, rua, numero){<br>
        this.estado = estado<br>
        this.cidade = cidade<br>
        this.rua = rua<br>
        this.numero = numero<br>
    }<br>
}<br>
Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

### Empresa
O cnpj de uma empresa é algo que não deve mudar após a criação do objeto. Por isso, este atributo deve ser privado na classe empresa.<br>

class Empresa{<br>
    #cnpj<br>
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){<br>
        this.endereco<br>
        this.nomeFantasia = nomeFantasia<br>
        this.razaoSocial = razaoSocial<br>
        this.#cnpj = cnpj<br>
        this.clientes = new Set()<br>
        this.telefones = new Set()<br>
    }<br>
}<br>

## Objetivos, parte 1
No script desenvolvido deverão existir métodos construtores para cada tipo de objeto. <br>
Para cada atributo privado, deverão existir métodos de acesso get. <br>
Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa. <br>

## Objetivos, parte 2
O script deve ser testado! <br>
Para isso crie uma empresa e atribua a ela um endereço e pelo menos dois telefones.<br>
Além disso, crie cinco clientes, cada um com seu endereço e dois telefones. Estes clientes devem ser colocados dentro do conjunto de
clientes da empresa. <br>


## Objetivos, parte 3
Por fim, seu script deve ser capaz de gerar uma descrição da empresa
e de seus clientes, desta forma: <br>

Razão Social: MERCADOLIVRECOM ATIVIDADES DE INTERNET LTDA<br>
Nome Fantasia: Mercado Livre<br>
----------------------------------------------------------
Nome: Pietra<br>
Estado: SP, Cidade: São José dos Campos, Rua: Rua das Flores, Número: 437<br>
ddd: 12 .......... número: 998457613<br>
ddd: 16 .......... número: 995467138<br>

Nome: Marcos<br>
Estado: MG, Cidade: São João Del Rei, Rua: Rua do Presidente, Número: 7913<br>
ddd: 18 .......... número: 995461327<br>
ddd: 15 .......... número: 997984511<br>

Nome: Amanda
Estado: SP, Cidade: São Carlos, Rua: Rua Jacinto Favoretto, Número: 553<br>
ddd: 17 .......... número: 998764135<br>
ddd: 61 .......... número: 933471649<br>

Nome: Bruno<br>
Estado: BA, Cidade: Salvador, Rua: Avenida 15 de Agosto, Número: 976<br>
ddd: 19 .......... número: 996134796<br>
ddd: 16 .......... número: 996871346<br>

Nome: Paula<br>
Estado: CE, Cidade: Fortaleza, Rua: Travessa da Onça, Número: 461<br>
ddd: 12 .......... número: 997147613<br>
ddd: 12 .......... número: 994134941<br>