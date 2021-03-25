
const moment = require('moment')

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
    else{
        return 0
    }
}

const campanhaVacinacao = (pet) => {
    let vacinados = 0
    for (pet of pets){
        vacinados += vacinarPet(pet)
    }
    console.log(vacinados)
}

const darBanhoPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({'Serviço': "Banho ",
    Data: dataHoje
    })

}

const tosarPet = (pet) =>{
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({'Serviço': "Tosa ",
    Data: dataHoje
    })

}

const apararUnhasPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({'Serviço': "Aparou unhas ",
    Data: dataHoje
    })

}


const adocionarNovoPet = (nome, tipo, idade, raca, peso, tutor, vacinado) => {
    let pet =  {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        vacinado: vacinado,
        servicos: []
    }
    pets.push(pet)
}




//listarPets();

adocionarNovoPet("Tico", "gato", 3, "siames", 2, "Tercio", false)
adocionarNovoPet("Dog", "cachorro", 1, "poodle", 5, "Jurema", true)
//campanhaVacinacao()
darBanhoPet(pets[3])
tosarPet(pets[3])
apararUnhasPet(pets[3])

console.log(pets[3])