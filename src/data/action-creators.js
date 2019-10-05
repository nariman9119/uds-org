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
        const response = await fetch('http://localhost:8090/api/organizations');
        const data = await response.json();
        dispatch({ type: actions.LOAD_ORGANIZATIONS, payload: data });
    } catch(error) {
        dispatch({ type: actions.LOAD_ORGANIZATIONS_FAILED, payload: error });
    }
};

export const loadCurrentOrganization = (url) => async (dispatch) => {
    dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION_PENDING });
    try {
        const response = await fetch(`http://localhost:8090/api/organization/${url}`);
        const data = await response.json();
        dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION, payload: data });
        dispatch(changeTitle(data.name));

    } catch(error) {
        dispatch({ type: actions.LOAD_CURRENT_ORGANIZATION_FAILED, payload: error });
    }
};

export const updateMainInfo = (data) => async (dispatch) => {
    try {
        dispatch({ type: actions.UPDATE_MAIN_INFO, payload: data });
        const response = await fetch(`http://localhost:8090/api/organization/updateMainInfo`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await response.json();
    } catch(error) {
        console.log(error);
    }
};
