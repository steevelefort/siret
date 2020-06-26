const siren = require('../index');

describe('isSiret', () => {
    it('ok', () => {
        expect(siren.isSIRET('11111111811115')).toBeTruthy();
    });

    it('Control bit is incorrect', () => {
        expect(siren.isSIRET('111111118111114')).toBeFalsy();
    });

    it('Luhn correct but too short (SIREN)', () => {
        expect(siren.isSIRET('111111118')).toBeFalsy();
    });

    it('Luhn correct but too long', () => {
        expect(siren.isSIRET('111111118111112')).toBeFalsy();
    });
});
