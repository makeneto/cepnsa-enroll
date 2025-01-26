selectPhoto() // Selecionar foto e imprimir

 // Morada do usuário
studentLocation().then((location) => {
    const address = document.getElementById('imora')
    address.setAttribute('value', `${location.country_name}, ${location.city}`)
    address.setAttribute('placeholder', `${location.country_name}, ${location.city}`)
})
.catch((error) => {
    console.log(error)
})

generateEnrollNumber() // Gerar número de Matrícula aleatório
dates() // Datas