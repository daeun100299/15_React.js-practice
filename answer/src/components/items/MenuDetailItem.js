import { useEffect } from "react";
import { getMenudetailApi } from "../../apis/MenuApi";
import { useDispatch, useSelector } from "react-redux";

function MenuDetailItem({id}) {
    const result = useSelector(state => state.menuReducer);
    const menuDetail = result.menudetail;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getMenudetailApi(id));
        }, []
    );

    return (
        menuDetail && (
            <ul>
                <li>이름 : {menuDetail.menuName}</li>
                <li>가격 : {menuDetail.menuPrice}</li>
                <li>카테고리 : {menuDetail.categoryMenu}</li>
                <li>{menuDetail.isOrderable ? "주문 가능" : "주문 불가능"}</li>
                <li>설명 : {menuDetail.detail.description}</li>
                <img src={menuDetail.detail.image} alt={menuDetail.menuName} />
            </ul>
        )
    );
}

export default MenuDetailItem;