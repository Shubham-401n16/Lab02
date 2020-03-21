'use strict';

const minimist = require('minimist');

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

    valid() {
        if (!this.command) return false;

        if (!this.command.action) return false;

        switch (this.command.action) {
            case 'add':
                return typeof this.command.payload === 'string';
            default:
                break;
        }
    };

}




module.exports = Input;