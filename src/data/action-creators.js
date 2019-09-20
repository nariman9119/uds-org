import {TYPES} from "./action-types";

export const selectOrganization = (organization) => (dispatch) => {
    dispatch({
        type: TYPES.SELECT_ORGANIZATION,
        data: {organization: organization}
    });
};

export const unselectOrganization = () => (dispatch) => {
    dispatch({
        type: TYPES.UNSELECT_ORGANIZATION
    });
};