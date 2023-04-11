'use strict';
let randomName = require('node-random-name');

module.exports = async (context, callback) => {
    return randomName();
};
