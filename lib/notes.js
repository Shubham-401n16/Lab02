
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

        console.log('Adding note');
        console.log(id + ':', payload);
    };

    // valid(args){
    //     if(!args.payload || !args.payload.length){
    //         throw(console.error());
    //     }
    //     return true;
    // }

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