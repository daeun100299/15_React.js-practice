import {createActions, handleActions} from 'redux-actions';

const initialState = {
    id: '',
    menuName: '',
    menuPrice: 0,
    categoryName: '',
    isOrderable: false,
    detail: {
        description: '',
        image: ''
    }
};

const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENUDETAIL = 'menu/GET_MENUDETAIL';
const DELETE_MENU = 'menu/DELETE_MENU';
const REGIST_MENU = 'menu/REGIST_MENU';

export const {menu: {getMenulist, getMenudetail, deleteMenu, registMenu}} = createActions({
    [GET_MENULIST] : (res) => ({menulist : res}),
    [GET_MENUDETAIL] : (res) => ({menudetail : res}),
    [DELETE_MENU] : (res) => ({deletemenu : res}),
    [REGIST_MENU] : (res) => ({registmenu : res}) 
});

const menuReducer = handleActions(
    {
        [GET_MENULIST] : (state, {payload}) => {
            return payload;
        },
        [GET_MENUDETAIL] : (state, {payload}) => {
            return payload;
        },
        [DELETE_MENU] : (state, {payload}) => {
            return payload;
        },
        [REGIST_MENU] : (state, {payload}) => {
            return payload;
        }
    }, initialState
);

export default menuReducer;