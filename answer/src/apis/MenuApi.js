import { getMenulist, getMenudetail, deleteMenu, registMenu } from "../modules/MenuModule";
import { request } from "./CallApi";

export function getMenulistApi() {
    return async (dispatch, getState) => {
        const result = await request('GET', '/menu');

        dispatch(getMenulist(result));
    };
}

export function getMenudetailApi(id) {
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu/${id}`);

        dispatch(getMenudetail(result));
    }
}

export function getMenudeleteApi(id) {
    return async (dispatch, getState) => {
        const result = await request('DELETE', `/menu/${id}`);

        dispatch(deleteMenu(result));
    }
}

export function registMenuApi() {
    return async (dispatch, getState) => {
        const result = await request('REGIST', '/menu/regist');

        dispatch(registMenu(result));
    }
}