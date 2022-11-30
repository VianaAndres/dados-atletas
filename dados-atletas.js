class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11)
            return "Infantil"
        if (this.idade >= 12 && this.idade <= 13)
            return "Juvenil"
        if (this.idade >= 14 && this.idade <= 15)
            return "Intermediário"
        if (this.idade >= 16 && this.idade <= 30)
            return "Adulto"
        if (this.idade >= 0 && this.idade <= 8)
            return "Sem categoria"
        if (this.idade >= 31 && this.idade <= 150)
            return "Sem categoria"
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura) // Fórmula: imc = peso / (altura x altura)
    }
    calculaMediaValida() {
        let notasDadas = this.notas;
        let notasReorganizadas = notasDadas.sort(function comparaNumeros(a, b) {
            if (a == b) return 0
            if (a < b) return -1
            if (a > b) return 1
        })

        let notasMedia = notasReorganizadas.slice(1, 4)

        let somaNotasMedia = notasMedia.reduce(function (total, atual) {
            return total + atual
        }, 0)

        let media = (somaNotasMedia / notasMedia.length)

        return media;
    }
    obtemNomeAtleta(){
        return this.nome
    } 
    obtemIdadeAtleta() {
        return this.idade
    } 
    obtemPesoAtleta() {
        return this.peso
    } 
    obtemNotasAtleta() {
        return this.notas
    } 
    obtemCategoria() {
        return atleta.calculaCategoria()
    } 
    obtemIMC() {
        return atleta.calcularIMC()
    } 
    obtemMediaValida() {
        return atleta.calculaMediaValida()
    } 
}

const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]) // informação de entrada 

console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.altura}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média válida: ${atleta.obtemMediaValida()}`)