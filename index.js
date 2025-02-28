class Cliente{
    nome;
    #cpf;
    endereco;

    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get pegarCpf(){
        return this.#cpf;
    }

    //Métodos de recuperação para caixa alta e caixa baixa
    
    nomeUPcase(){
        return this.nome.toUpperCase();
    }

    nomeLWcase(){
        return this.nome.toLowerCase();
    }

    adicionarTelefone(newTelephone){
        this.telefones.add(newTelephone);
    }

    exibirTelefone(){
        console.log(this.telefones);
    }

    //Método imprimir cliente
    imprimirCliente(){
        return `Nome: ${this.nome}
    ${this.endereco.imprimirEndereco()}
    ${Array.from(this.telefones).map(telefone => `ddd: ${telefone.ddd} .......... número: ${telefone.numero}`).join('\n    ')}`
    }
}

class Telefone{
    ddd;
    numero;
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    estado;
    cidade;
    rua;
    numero;

    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    //Métodos de recuperação para caixa alta e caixa baixa
    estadoUPcase(){
        return this.estado.toUpperCase();
    }

    estadoLWcase(){
        return this.estado.toLowerCase();
    }


    cidadeUPcase(){
        return this.cidade.toUpperCase();
    }

    cidadeLWcase(){
        return this.cidade.toLowerCase();
    }

    ruaUPcase(){
        return this.rua.toUpperCase();
    }

    ruaLWcase(){
        return this.rua.toLowerCase();
    }

    //Método imprimir endereço
    imprimirEndereco(){
        return `Estado: ${this.estado}, Cidade: ${this.cidade}, Rua: ${this.rua}, Número: ${this.numero}`
    }
}

class Empresa {
    razaoSocial;
    nomeFantasia;
    #cnpj;
    endereco;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get pegarCnpj(){
        return this.#cnpj;
    }

    //Métodos para adiconar e exibir os clientes e os telefones
    adicionarTelefone(newTelephone){
        this.telefones.add(newTelephone);
    }

    adicionarCliente(newClients){
        this.clientes.add(newClients);
    }

    //Métodos de recuperação dos atributos para caixa alta e caixa baixa
    razaoSocialUPcase(){
        return this.razaoSocial.toUpperCase();
    }

    razaoSocialLWcase(){
        return this.razaoSocial.toLowerCase();
    }

    nomeFantasiaUPcase(){
        return this.nomeFantasia.toUpperCase();
    }

    nomeFantasiaLWcase(){
        return this.nomeFantasia.toLowerCase();
    }

    

    //Método para exibição
    detalhe(){
        return `
    Razão Social: ${this.razaoSocial}
    Nome Fantasia: ${this.nomeFantasia}
    ----------------------------------------------------------
    ${Array.from(this.clientes).map(cliente => cliente.imprimirCliente()).join('\n\n    ')}
    \n`}
}

//Atribuir os endereços
let endereco01 = new Endereco("SP", "São José dos Campos", "Rua das Flores", 437);
let endereco02 = new Endereco("MG", "São João Del Rei", "Rua do Presidente", 7913);
let endereco03 = new Endereco("SP", "São Carlos", "Rua Jacinto Favoretto", 553);
let endereco04 = new Endereco("BA", "Salvador", "Avenida 15 de Agosto", 976);
let endereco05 = new Endereco("CE", "Fortaleza", "Travessa da Onça", 461);
let endereco06 = new Endereco("PA", "Curitiba", "Rua José de Alencar", 249);

//Atribuir os telefones
let telefone01 = new Telefone(12, 998457613);
let telefone02 = new Telefone(16, 995467138);
let telefone03 = new Telefone(18, 995461327);
let telefone04 = new Telefone(15, 997984511);
let telefone05 = new Telefone(17, 998764135);
let telefone06 = new Telefone(61, 933471649);
let telefone07 = new Telefone(19, 996134796);
let telefone08 = new Telefone(16, 996871346);
let telefone09 = new Telefone(12, 997147613);
let telefone10 = new Telefone(12, 994134941);

let telefoneEmpresa01 = new Telefone(11, 33471649);
let telefoneEmpresa02 = new Telefone(11, 37461971);


//Atribuir os clientes
let cliente01 = new Cliente("Pietra", "497.138.467-51", endereco01);
let cliente02 = new Cliente("Marcos", "946.103.846-12", endereco02);
let cliente03 = new Cliente("Amanda", "164.954.743-61", endereco03);
let cliente04 = new Cliente("Bruno", "654.918.731-68", endereco04);
let cliente05 = new Cliente("Paula", "197.417.913-46", endereco05);


//Atribuir telefones aos clientes
cliente01.adicionarTelefone(telefone01);
cliente01.adicionarTelefone(telefone02);

cliente02.adicionarTelefone(telefone03);
cliente02.adicionarTelefone(telefone04);

cliente03.adicionarTelefone(telefone05);
cliente03.adicionarTelefone(telefone06);

cliente04.adicionarTelefone(telefone07);
cliente04.adicionarTelefone(telefone08);

cliente05.adicionarTelefone(telefone09);
cliente05.adicionarTelefone(telefone10);


//Atribuir a empresa
let company = new Empresa("MERCADOLIVRECOM ATIVIDADES DE INTERNET LTDA", "Mercado Livre", "46.746.197/0001-74", endereco06);

//Atribuir clientes à empresa
company.adicionarCliente(cliente01);
company.adicionarCliente(cliente02);
company.adicionarCliente(cliente03);
company.adicionarCliente(cliente04);
company.adicionarCliente(cliente05);

//Atribuir telefone à empresa
company.adicionarTelefone(telefoneEmpresa01);
company.adicionarTelefone(telefoneEmpresa02);


//Descrição da empresa
console.log(company.detalhe());

