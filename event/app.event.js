const EventEmitter = require('events');

export const AppEventConst = {
    addNewVocab: 'addNewVocab'
}

export const AppEvent = new EventEmitter();//app event