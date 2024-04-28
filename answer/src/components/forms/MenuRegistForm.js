import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registMenuApi } from "../../apis/MenuApi";

function MenuRegistForm() {
    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registMenu, setRegistMenu] = useState({
        id: 0,
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        isOrderable: false,
        detail: {
            description: '',
            image: ''
        }
    });

    const onChangeHandler = e => {
        let name = e.target.name;
        let value = e.target.value;

        switch(name) {
            case 'menuPrice' : 
                value = parseInt(value); break;
            case 'isOrderable' : 
                value = !!value; break;
            case 'description' : 
                name = 'detail';
                value = {
                    description : value
                }; break;
        }

        setRegistMenu(
            {
                ...registMenu,
                [name] : value
            }
        );

        console.log(registMenu);
    };

    useEffect(
        () => {
            if(result.registmenu) {
                alert('메뉴 등록');
                navigate(`/menu`);
            }
        }, [result]
    );

    const onClickHandler = () => {
        dispatch(registMenuApi(registMenu));
    }

    return (
        <>
            <label>메뉴 이름 : </label>
            <input type="text" name="menuName" value={registMenu.menuName} onChange={onChangeHandler} />
            <br />
            <label>메뉴 가격 : </label>
            <input type="number" name="menuPrice" value={registMenu.menuPrice} onChange={onChangeHandler} />
            <br />
            <label>카테고리 : </label>
            <select name="categoryName" value={registMenu.categoryName} onChange={onChangeHandler}>
                <option>한식</option>
                <option>일식</option>
                <option>서양</option>
                <option>동양</option>
                <option>커피</option>
                <option>쥬스</option>
                <option>기타</option>
            </select>
            <br />
            <label>판매 여부 : </label>
            <select name="isOrderable" value={registMenu.isOrderable} onChange={onChangeHandler}>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br />
            <label>설명 : </label>
            <textarea name="description" value={registMenu.detail.description} onChange={onChangeHandler}></textarea>
            <br />
            <button onClick={onClickHandler}>메뉴 등록</button>
        </>
    );
}

export default MenuRegistForm;