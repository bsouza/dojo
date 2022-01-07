import { Calculator } from "./calculator";

describe('Calculator', function () {

    it('should return 2', () => {
        const result = new Calculator().sum(1, 1)
        expect(result).toBe(1)
    });

});
