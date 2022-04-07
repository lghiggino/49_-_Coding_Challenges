function cnabParser(string) {
    const tipo = string.slice(0, 1)
    const data = string.slice(1, 9)
    const valor = string.slice(9, 19)
    const cpf = string.slice(19, 30)
    const cartao = string.slice(30, 46)
    const hora = string.slice(46, 52)
    const donoDaLoja = string.slice(52, 65).trim()
    const nomeDaLoja = string.slice(65, 80).trim()

    return {
        tipo,
        data,
        valor,
        cpf,
        cartao,
        hora,
        donoDaLoja,
        nomeDaLoja
    }
}

module.exports = cnabParser