
let nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'luna',
        tipo: 'cachorro',
        idade: 2,
        raca: 'Vira-lata',
        peso: 10,
        tutor: 'Edson',
        vacinado: false,
        servicos: ['banho', 'vermifugação']
    },
    {
        nome: 'foguete',
        tipo: 'cachorro',
        idade: 1,
        raca: 'São bernardo',
        peso: 30,
        tutor: 'Luana',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Bob',
        tipo: 'gato',
        idade: 3,
        raca: 'cianes',
        peso: 2,
        tutor: 'barbara',
        vacinado: false,
        servicos: ['banho', 'vacinação']
    },
];

// 
const exibirPet = (pet) => {
    console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`)
}
const listarPets = () => {
   
    for(let pet of pets){
        exibirPet(pet)
    }
}

const vacinarPet = (pet) => {
    
    if(pet.vacinado == false){
        pet.vacinado = true
        exibirPet(pet)
        return 1
    }
}

const campanhaVacinacao = (pet) => {
    let vacinados = 0
    for (pet of pets){
        vacinados += vacinarPet(pet)
    }
    console.log(vacinados)
}




//listarPets();
//vacinarPet(pets[2])
campanhaVacinacao()

