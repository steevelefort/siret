const siren = require('../index');

describe('isSiret', () => {
    it('ok', () => {
        // String and number shall be accepted
        expect(siren.isSIRET('11111111811115')).toBeTruthy();
        expect(siren.isSIRET(11111111811115)).toBeTruthy();
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

    it('Special case : La Poste SIRET', () => {
        expect(siren.isSIRET('35600000000048')).toBeTruthy();
        expect(siren.isSIRET('35600000010866')).toBeTruthy();
        expect(siren.isSIRET(35600000010861)).toBeTruthy();
    })
});
