const siren = require('../index');

describe('getSiren', () => {
    it('test', () => {
        for (let i = 0; i < 100; i++) {
            expect(siren.isSIREN(siren.getSIREN())).toBeTruthy();
        }
    });
});
