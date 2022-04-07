const cnabParser = require("../src/cnabParser")
const fs = require("fs");
const path = require("path");
const normalizeText = require("normalize-text")

const file = path.join(__dirname, "../test/fixtures", "CNAB.txt");
const fdr = fs.readFileSync(file, "utf8", function (err, data) {
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
        expect(parsed.hora).toBe("53    ")
        expect(parsed.donoDaLoja).toBe("JOÃO MACEDO")
        expect(parsed.nomeDaLoja).toBe("BAR DO JOÃO")
    })

})