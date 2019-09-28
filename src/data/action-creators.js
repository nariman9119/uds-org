import actions from "./action-types";


export const loadPage = (page) => ({
    type: actions.LOAD_PAGE,
    data: {page: page}
});

export const changeTitle = (title) => ({
    type: actions.CHANGE_TITLE,
    data: {title: title}
});

export const loadOrganizations = () => async (dispatch) => {
    dispatch({ type: actions.LOAD_ORGANIZATIONS_PENDING });
    try {
        const response = await fetch('/api/organizations');
        const data = await response.json();
        dispatch({ type: actions.LOAD_ORGANIZATIONS, payload: data });
    } catch(error) {
        dispatch({ type: actions.LOAD_ORGANIZATIONS_FAILED, payload: error });
    }
};

export const loadCurrentOrganization = (url) => async (dispatch) => {
    dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION_PENDING });
    try {
        const response = await fetch(`api/organization/${url}`);
        const data = await response.json();
        dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION, payload: data });
    } catch(error) {
        dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION_FAILED, payload: error });
    }
};

