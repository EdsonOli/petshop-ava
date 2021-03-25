
let nomePetshop = "PETSHOP AVANADE";

let pets =[
    {
        nome: 'luna',
        tipo: 'cachorro',
        idade: 2,
        raca: 'Vira-lata',
        peso: 10,
        tutor: 'Edson',
        vacinado: true,
        servicos: ['banho', 'vermifugação']
    },
    {
        nome: 'foguete',
        tipo: 'cachorro',
        idade: 1,
        raca: 'São bernardo',
        peso: 30,
        tutor: 'Luana',
        vacinado: true,
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

const listarPets = () => {
   
    for(let pet of pets){
        console.log(`Nome do Cachorro: ${pet.nome}`)
    }
}

listarPets();
