
'use strict';

const uuid = require('uuid').v4;
const Validator = require('./validator.js');

class Notes {
    constructor(args) {

        {
            if (args.valid()) this.execute(args.command);
            else console.error('ERROR! Invalid arguments sent to app.');
        }

    }

    execute(command) {
        console.log('Correct! Let us execute');
        switch (command.action) {
            case 'add':
                this.add(command.payload);
                break;
            default:
                break;
        }
    };

    add(payload) {

         this.id = uuid();
         this.text = this.payload;
         this.valid ? console.log('Valid input') : console.error('Invalid');

    };


    valid() {
        const schema = {
            id: {type:'number' , required:true},
            text: {type: 'string', required: true}
        }

        const validator = new Validator(schema);
        return validator.isValid(this.payload);
    }

}

module.exports = Notes;