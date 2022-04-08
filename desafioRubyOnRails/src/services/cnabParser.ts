type cnapParserType = {
    tipo: string;
    data: string;
    valor: string;
    cpf: string;
    cartao: string;
    hora: string;
    donoDaLoja: string;
    nomeDaLoja: string;
};

export default class CnabParser {
    public rowSplit(cnabTextBlock: string): string[] {
        const array = cnabTextBlock.split('\n');
        const filteredEmpties = array.filter(item => item.length !== 0);
        return filteredEmpties;
    }

    public parse(string: string): cnapParserType {
        const tipo = string.slice(0, 1);
        const data = string.slice(1, 9);
        const valor = string.slice(9, 19);
        const cpf = string.slice(19, 30);
        const cartao = string.slice(30, 46);
        const hora = string.slice(46, 48);
        const donoDaLoja = string.slice(48, 62).trim();
        const nomeDaLoja = string.slice(62, 80).trim();

        return {
            tipo,
            data,
            valor,
            cpf,
            cartao,
            hora,
            donoDaLoja,
            nomeDaLoja,
        };
    }
}
