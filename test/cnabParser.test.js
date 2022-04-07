const { cnabParser, cnabRowSplitter} = require("../src/cnabParser")
const fs = require("fs");
const path = require("path");
const normalizeText = require("normalize-text")

const file = path.join(__dirname, "../test/fixtures", "CNAB.txt");
const cnabTextBlock = fs.readFileSync(file, "utf8", function (err, data) {
    return data;
});

const string = "3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       "
const string2 = "5201903010000013200556418150633123****7687145607MARIA JOSEFINALOJA DO Ó - MATRIZ"


describe('Line By Line', () => {

    it('should make understable data out of a single line on the txt file', () => {
        const parsed = cnabParser(string)
        expect(parsed.tipo).toBe("3")
        expect(parsed.data).toBe("20190301")
        expect(parsed.valor).toBe("0000014200")
        expect(parsed.cpf).toBe("09620676017")
        expect(parsed.cartao).toBe("4753****31531534")
        expect(parsed.hora).toBe("53")
        expect(parsed.donoDaLoja).toBe("JOÃO MACEDO")
        expect(parsed.nomeDaLoja).toBe("BAR DO JOÃO")
    })

    it("should parse a fullfilled string", () => {
        const parsed2 = cnabParser(string2)
        expect(parsed2.tipo).toBe("5")
        expect(parsed2.data).toBe("20190301")
        expect(parsed2.valor).toBe("0000013200")
        expect(parsed2.cpf).toBe("55641815063")
        expect(parsed2.cartao).toBe("3123****76871456")
        expect(parsed2.hora).toBe("07")
        expect(parsed2.donoDaLoja).toBe("MARIA JOSEFINA")
        expect(parsed2.nomeDaLoja).toBe("LOJA DO Ó - MATRIZ")
    })

})

describe("split text rows into individual strings", () => {
    it("should split the txt file into 21 separated string", () => {
        const array = cnabRowSplitter(cnabTextBlock)
        expect(array.length).toBe(21)
    })
})