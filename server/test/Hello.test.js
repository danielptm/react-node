const mocha = require('mocha');

import Hello from '../service/Hello';

it ('Say Hi test:', () => {
    let x = Hello.sayHi();
    console.log(x);
});



