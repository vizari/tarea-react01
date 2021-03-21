
 findName = () => {
    const nombres = ['Leonor', 'Isabel', 'Segundo', 'Patricio']
    return nombres.findIndex(n => n === 'Isabel')
}
console.log(findName())

everyNum = () => {
    const numeros = [1, 20, 3, 67, 18]
    return numeros.every(n => n < 70)
}
console.log(everyNum())

someNum = () => {
    const numeros = [1, 20, 3, 67, 18]
    return numeros.some(n => n > 68)
}
console.log(someNum())

filterNombres = () => {
    const nombresCap = ['Sofia', 'Amanda','Nicolas', 'Alfonso' ]
    return nombresCap.filter(n => n.length > 5)
}
console.log(filterNombres())

mapNumeros = () => {
    const numerosMap = [1, 20, 3, 67, 18]
    const numeros = numerosMap.map(n => n*10 )
    return numeros
}
console.log(mapNumeros())





