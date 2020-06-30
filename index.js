const _SIRENLength = 9;
const _SIRETLength = 14;

const getSIREN = function() {
    const sirenToBe = String(Math.floor(Math.random() * 1e8));
    let siren = sirenToBe + luhn(sirenToBe);

    // LeftPad with leading 0
    while (siren.length < _SIRENLength) {
        siren = '0' + siren;
    }

    return siren;
}

const getSIRET = function() {
    const siretToBe = String(getSIREN() + Math.floor(Math.random() * 1e4));
    let siret = siretToBe + luhn(siretToBe);

    // LeftPad with leading 0
    while (siret.length < _SIRETLength) {
        siret = '0' + siret;
    }

    return siret;
}

const isSIREN = function(siren) {
    return verify(siren, _SIRENLength)
}

const isSIRET = function(siret) {
    return verify(siret, _SIRETLength);
}

/**
 * Verify that number has the expected size and that it has a valid luhn signature
 * Special case for La Poste SIRET
 * @param {string} number
 * @param {number} size
 * @returns {boolean}
 */
function verify(number, size) {
    if (typeof number !== 'string') {
        number = String(number)
    }

    if (isNaN(number) || number.length !== size) {
        return false;
    }

    let bal = 0;
    let total = 0;

    // Special case: La Poste has 12,564 Siret numbers, so we check against the sum of all numbers % 5 instead of luhn
    // 35600000000048 is the main SIRET number and is a normal number.
    if (size === 14 && number.slice(0, 9) === '356000000' && number !== '35600000000048') {
        for (let i = 0; i < size; i++) {
            total += parseInt(number.charAt(i), 10);
        }

        return total % 5 === 0;
    }

    // Luhn algorithm
    for (let i = size-1; i >= 0; i--) {
        const step = (number.charCodeAt(i) - 48) * (bal + 1);

        total += (step > 9) ? step - 9 : step;
        bal = 1 - bal;
    }

    return total % 10 === 0;
}

function luhn(number) {
    const luhnSum = [...Array.from(number), 0]
        .reverse()
        .map((number, index) => index % 2 ? (number * 2 > 9 ? number * 2 - 9 : number * 2) : number)
        .reduce((sum, number) => sum + parseInt(number, 10));

    return String((10 - luhnSum % 10) % 10);
}

module.exports = isSIRET;
module.exports.isSIRET = isSIRET;
module.exports.isSIREN = isSIREN;
module.exports.getSIRET = getSIRET;
module.exports.getSIREN = getSIREN;
