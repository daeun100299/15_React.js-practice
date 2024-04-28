import { Link } from "react-router-dom";
import MenuList from "../components/lists/MenuList";

function Menu() {
    return (
        <>
            <h2>메뉴 목록</h2>
            <Link to="/menu/regist">메뉴 추가하기</Link>
            <MenuList />
        </>
    );
}

export default Menu;