import actions from "./action-types";

const initialState = {
    page: '',
    title: 'Organizations'
};

export default (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case actions.LOAD_PAGE:
            return {
                ...newState,
                page: action.data.page
            };
        case actions.CHANGE_TITLE:
            return {
                ...newState,
                title: action.data.title
            };
    }

    return newState
};
