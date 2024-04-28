import { useEffect } from "react";
import MenuItem from "../items/MenuItem";
import { getMenulistApi } from "../../apis/MenuApi";
import {useDispatch, useSelector} from 'react-redux';

function MenuList() {
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getMenulistApi());
        }, []
    );
    return (
        menuList && ( 
            <>
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu} />)}
            </>
        )
    );
}

export default MenuList;