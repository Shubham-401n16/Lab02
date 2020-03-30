'use strict';

const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {
    constructor(args) {
        let formatted = minimist(args);
        console.log('formatted', formatted);


        this.command = {};

        let objectKeyArray = Object.keys(formatted);

        for (let i = 0; i < objectKeyArray.length; i++) {

            let key = objectKeyArray[i], val = formatted[key];

            switch (key) {
                case 'a':
                case 'add':
                    this.command = { action: 'add', payload: val };
                    return;
                default:
                    break;
            }
        }

    }


    valid(){
        const schema = {
            action : {type: 'string', required: true},
            payload: {type: 'string', required: true},
        }

        const validator = new Validator(schema);
        return validator.isValid(this.command);

    }

}




module.exports = Input;