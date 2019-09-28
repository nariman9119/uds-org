import actions from "./action-types";

const initialState = {
    list: [],
    current: null,
    loading: false,
    error: null
};

export default (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case actions.LOAD_ORGANIZATIONS_PENDING:
        case actions.LOAD_CURRENT_ORGANIZATION_PENDING:
            return {
                ...newState,
                loading: true
            };
        case actions.LOAD_ORGANIZATIONS_FAILED:
        case actions.LOAD_CURRENT_ORGANIZATION_FAILED:
            return {
                ...newState,
                loading: false,
                error: action.payload
            };
        case actions.LOAD_ORGANIZATIONS:
            return {
                ...newState,
                list: action.payload,
                loading: false,
                error: null
            };

        case actions.LOAD_CURRENT_ORGANIZATION:
            return {
                ...newState,
                current: action.payload,
                loading: false,
                error: null
            };
    }

    return newState
};
