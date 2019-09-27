import {TYPES} from "./action-types";

export const loadPage = (page) => (dispatch) => {
    dispatch({
        type: TYPES.LOAD_PAGE,
        data: {page: page}
    });
};

export const changeTitle = (title) => (dispatch) => {
    dispatch({
        type: TYPES.CHANGE_TITLE,
        data: {title: title}
    });
};