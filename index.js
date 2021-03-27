
const moment = require('moment')
const dadospet = require('./database.json')
const fs = require('fs');


let nomePetshop = "PETSHOP AVANADE";
let pets = dadospet.pets

const exibirPet = (pet) => {
    console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado ? "Vacinado": "Não vacinado"}
    Servicos: ${pet.servicos}`)
}
const listarPets = () => {

    for (let pet of pets) {
        exibirPet(pet)
    }
}

const vacinarPet = (pet) => {

    if (pet.vacinado == false) {
        pet.vacinado = true
        exibirPet(pet)
        return 1
    }
    else {
        return 0
    }
}

const campanhaVacinacao = (pet) => {
    let vacinados = 0
    for (pet of pets) {
        vacinados += vacinarPet(pet)
    }
    console.log(vacinados)
}

const darBanhoPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'Serviço': "Banho ",
        Data: dataHoje
    })

}

const tosarPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'Serviço': "Tosa ",
        Data: dataHoje
    })

}

const apararUnhasPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'Serviço': "Aparou unhas ",
        Data: dataHoje
    })

}


const adocionarNovoPet = (nome, tipo, idade, raca, peso, tutor, vacinado) => {
    let pet = {
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

// adocionarNovoPet("Tico", "gato", 3, "siames", 2, "Tercio", false)
// adocionarNovoPet("Dog", "cachorro", 1, "poodle", 5, "Jurema", true)
//campanhaVacinacao()
// darBanhoPet(pets[3])
// tosarPet(pets[3])
// apararUnhasPet(pets[3])
// const naoVacinados = pets.filter((pet) => {
//     return !pet.vacinado
// })

// console.log(naoVacinados)
//console.log(JSON.stringify(pets))
console.log(pets)