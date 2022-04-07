const sum = require('../src/cnabParser');
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../test/fixtures", "CNAB.txt");
const fdr = fs.readFileSync(file, "utf8", function(err, data) {
  return data;
});

const string = "3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       "


expect(fdr).toBe(string)

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test("cnab", () => {
    expect(cnabTxt).toBe(true)
})

describe('DcoService', () => {

    beforeEach(() => {
        jest.spyOn(HttpClient, 'get').mockImplementation((_url, _options) => {
            const data = require("../test/fixtures/CNAB.txt")
            return Promise.resolve(data)
        })
    })

    it('lista os dados da dco', async () => {
        const today = dayjs().format('YYYY-MM-DD')
        const dcoId = 1
        const res = await DcoService.getVendasDeptosTotal(today, today, dcoId)
    })

})