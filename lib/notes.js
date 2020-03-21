
'use strict';

const uuid = require('uuid').v4;

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

        let id = uuid();

        console.log('Adding note');
        console.log(id + ':', payload);
    };

}

module.exports = Notes;