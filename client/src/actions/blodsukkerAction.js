import {
    GET_BLODSUKKER,
    ADD_BLODSUKKER,
    DELETE_BLODSUKKER
} from './types.js';

export const getBlodsukker = () => {
    return {
        type: GET_BLODSUKKER
    }
}
