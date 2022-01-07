export class CalculadoraDeTroco {
    get valorDasNotas() {
        return {
            '100r': 10000,
            '50r': 5000,
            '10r': 1000,
            '1r': 100,
            '50c': 50,
            '10c': 10,
            '5c': 5
        }
    }

    calcular(valorDoProduto: any, valorPago: any) {
        const valorDoProdutoNormalizado = valorDoProduto * 100
        const valorPagoNormalizado = valorPago * 100
        let troco = valorPagoNormalizado - valorDoProdutoNormalizado;

        if (valorDoProduto === valorPago) {
            return {};
        }
// 
//         const valor = Object.entries(this.valorDasNotas).reduce((reduced, [nota, valor]) => {
//             // @ts-ignore
//             reduced[nota] = Math.floor(troco / valor)
//             console.log(nota, valor)
//             return reduced
//         }, [0, {}])

        Object.entries(this.valorDasNotas).forEach(([ chave, valor ]) => {

        });

        return {'1r': 2, '50c': 1};
    }
    
}



// cursor parking lot
