
const moment = require('moment')
const fs = require('fs');
let dataBase = fs.readFileSync('./database.json')

let nomePetshop = "PETSHOP AVANADE";
dataBase = JSON.parse(dataBase)

const exibirPet = (pet) => {
    console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado ? "Vacinado": "Não vacinado"}
    Servicos: ${pet.servicos}`)
}

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(dataBase)
    fs.writeFileSync('database.json', petsAtualizado, 'utf-8')
}

const listarPets = () => {
    dataBase.pets.forEach(pet => exibirPet(pet))
}

const buscarPorTipo = (tipo) => {
    let encontrados = []
    encontrados = dataBase.pets.filter(pet => pet.tipo === tipo)
    return encontrados
}



const campanhaVacinacao = (lista) => {

   let contador = 0
   lista = lista.map((pet) => {
       if (!pet.vacinado){
           pet.vacinado = true
           contador++
       }
       return pet
   })
   console.log(`Pets vacinados: ${contador}`)
   atualizarBanco()    
}

const darBanhoPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'nome': "Banho ",
        'data': dataHoje
    })
    console.log(`Serviço: Banho
     Data: ${dataHoje}`)
}

const tosarPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'nome': "Tosa ",
        'data': dataHoje
    })
    console.log(`Serviço: Tosa
    Data: ${dataHoje}`)
}

const apararUnhasPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({
        'nome': "Aparou unhas ",
        'data': dataHoje
    })
    console.log(`Serviço: Aparou Unhas
    Data: ${dataHoje}`)
}


const adicionarNovoPet = (nome, tipo, idade, raca, peso, tutor, vacinado) => {
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
    dataBase.pets.push(pet)
    atualizarBanco()
}

const atenderCliente = (pet, servico) => {
    console.log(`Bem vinde ao ${nomePetshop}, ${pet.nome}!`)
    servico(pet)
    atualizarBanco()
    console.log(`Tchau!`)
}

const buscarPet = (nome) => {
    return dataBase.pets.find( pet => pet.nome === nome)
}


//listarPets();

//adicionarNovoPet("Joelma", "gato", 4, "siames", 2, "Tercio", false)
// adicionarNovoPet("Barbara", "cachorro", 1, "poodle", 5, "Jurema", false)
//campanhaVacinacao(dataBase.pets)
// console.log(dataBase.pets.length)
// darBanhoPet(pets[3])
// tosarPet(pets[3])
// apararUnhasPet(pets[3])
// const naoVacinados = pets.filter((pet) => {
//     return !pet.vacinado
// })

// console.log(naoVacinados)
//console.log(JSON.stringify(pets))
// console.log(dataBase.pets)
//atenderCliente(dataBase.pets[0], darBanhoPet)
//console.log(buscarPorTipo("gato"))
