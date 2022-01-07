import { CalculadoraDeTroco } from "./calculator";

describe('CalculadoraDeTroco', function () {

    it('deve retornar 0 quando não o pagamento tem o valor exato do produto', () => {
        const valorDoProduto = 2;
        const valorPago = 2;
        const resultado = new CalculadoraDeTroco().calcular(valorDoProduto, valorPago);
        expect(resultado).toEqual({});
    });

    it('deve retornar 2,50 caso o valor do produto seja 10,00', () => {
        const valorDoProduto = 7.50;
        const valorPago = 10;
        const resultado = new CalculadoraDeTroco().calcular(valorDoProduto, valorPago);
        expect(resultado).toEqual({
            '1r': 2,
            '50c': 1
        });
    })

    it('deve retornar 1 celula de 1 real quando o produto custa 4 e o pagamento é de 5', () => {
        const valorDoProduto = 4;
        const valorPago = 5;
        const resultado = new CalculadoraDeTroco().calcular(valorDoProduto, valorPago);
        expect(resultado).toEqual({
            '1r': 1,
        });
    })

});
