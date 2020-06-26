const siren = require('../index');

describe('isSiren', () => {
    it ('ok', () => {
       expect(siren.isSIREN('111111118')).toBeTruthy();
    });

    it ('Control key is incorrect', () => {
       expect(siren.isSIREN('111111111')).toBeFalsy();
    });

    it('Luhn correct but too short', () => {
        expect(siren.isSIREN('1238')).toBeFalsy();
    });

    it('Luhn correct but too long (SIRET)', () => {
        expect(siren.isSIREN('11111111811115')).toBeFalsy();
    });
});
