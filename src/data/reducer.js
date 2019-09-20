import {TYPES} from "./action-types";

const initialState = {
    organization: void 0,
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ORGANIZATION:
            return {
                ...newState,
                organization: action.data.organization
            };

        case TYPES.UNSELECT_ORGANIZATION:
            return {
                ...newState,
                organization: void 0
            };
    }

    return newState
};