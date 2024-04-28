import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">홈</NavLink></li>
                <li><NavLink to="/menu">메뉴 목록</NavLink></li>
                <li><NavLink to="/login">로그인</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;