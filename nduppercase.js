const { error } = require('console');

import('upper-case').then(uc =>{
    const str = "hello world";
    console.log(uc.upperCase(str));
}).catch(err =>{
    console.error("Failed to import upper case",err);
});