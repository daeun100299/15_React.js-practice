import { Link } from "react-router-dom";

function MenuItem({ menu }) {
    return (
        <div>
            <Link to={`/menu/${menu.id}`}>
                <ul>
                    <li>이름 : {menu.menuName}</li>
                    <li>가격 : {menu.menuPrice}</li>
                    <li>카테고리 : {menu.categoryMenu}</li>
                    <li>{menu.isOrderable ? "주문 가능" : "주문 불가능"}</li>
                </ul>
            </Link>
        </div>
    );
}

export default MenuItem;