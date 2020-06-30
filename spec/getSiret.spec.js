const siren = require('../index');

describe('getSiret', () => {
    it('test', () => {
        for (let i = 0; i < 100; i++) {
            expect(siren.isSIRET(siren.getSIRET())).toBeTruthy();
        }
    });
});
