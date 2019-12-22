import uuid from 'uuid';

import {
    GET_BLODSUKKER,
    ADD_BLODSUKKER,
    DELETE_BLODSUKKER
} from '../actions/types.js';

const initalState = {
        BlodsukkerVerdier: [
            {
                id: uuid(),
                blodsukker: '3.1',
                insulin: '5',
            },
            {
                id: uuid(),
                blodsukker: '12.1',
                insulin: '8',
            },
            {
                id: uuid(),
                blodsukker: '14.1',
                insulin: '9',
            },
            {
                id: uuid(),
                blodsukker: '8.1',
                insulin: '2',
            },
            {
                id: uuid(),
                blodsukker: '66.1',
                insulin: '14',
            },
        ],
}

export default function(state = initalState, action) {
    switch(action.type){
        case GET_BLODSUKKER:
            return {
                ...state
            };
        default:
            return state;
    }
}