import {TYPES} from "./action-types";

const initialState = {
    page: '',
    title: 'Organizations'
};

export default (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.LOAD_PAGE:
            return {
                ...newState,
                page: action.data.page
            };
        case TYPES.CHANGE_TITLE:
            return {
                ...newState,
                title: action.data.title
            };
    }

    return newState
};
