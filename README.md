# RJ3

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
criação. Portanto, o atributo deve ser privado.

```javascript
class Cliente{<br>
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }
}
```
Um cliente pode ter uma lista de telefones, que pode crescer
ou diminuir.

### Telefone

A classe telefone não deve possuir atributos privados.

```javascript
class Telefone(){
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}
```
Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

### Endereço

A classe endereço não deve possuir atributos privados.

```javascript
class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}
```
Esta classe servirá para criar objetos que serão usados em clientes e
na empresa.

### Empresa
O cnpj de uma empresa é algo que não deve mudar após a criação do objeto. Por isso, este atributo deve ser privado na classe empresa.

```javascript
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
}
```

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
e de seus clientes, desta forma:

    Razão Social: MERCADOLIVRECOM ATIVIDADES DE INTERNET LTDA
    Nome Fantasia: Mercado Livre
    ----------------------------------------------------------
    Nome: Pietra
    Estado: SP, Cidade: São José dos Campos, Rua: Rua das Flores, Número: 437
    ddd: 12 .......... número: 998457613
    ddd: 16 .......... número: 995467138

    Nome: Marcos
    Estado: MG, Cidade: São João Del Rei, Rua: Rua do Presidente, Número: 7913
    ddd: 18 .......... número: 995461327
    ddd: 15 .......... número: 997984511

    Nome: Amanda
    Estado: SP, Cidade: São Carlos, Rua: Rua Jacinto Favoretto, Número: 553
    ddd: 17 .......... número: 998764135
    ddd: 61 .......... número: 933471649

    Nome: Bruno
    Estado: BA, Cidade: Salvador, Rua: Avenida 15 de Agosto, Número: 976
    ddd: 19 .......... número: 996134796
    ddd: 16 .......... número: 996871346

    Nome: Paula
    Estado: CE, Cidade: Fortaleza, Rua: Travessa da Onça, Número: 461
    ddd: 12 .......... número: 997147613
    ddd: 12 .......... número: 994134941