# SIRET

SIRET is a simple validation module for french SIRET and SIREN numbers

## Installation

`$ npm install siret`

## Usage

```js
const siret = require('siret');

console.log(siret.isSIRET('79465211500013'));
// Return true : this is a SIRET number

console.log(siret.isSIREN('794652115'));
// Return true : this is a SIREN number

console.log(siret.isSIRET('01234567890123'));
// Return false : this is NOT a SIRET number

console.log(siret.isSIREN('012345678'));
// Return false : this is NOT a SIREN number
```

## Limitations

SIRET will currently fail against half of La Poste SIRET number (starting with 356000000) because it follows special rules. Ex.: 35600000010866 is a valid SIRET number, despite being falsy through SIRET.

## [MIT Licensed](LICENSE)
