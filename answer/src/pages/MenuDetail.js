import { useNavigate, useParams } from 'react-router-dom';
import MenuDetailItem from '../components/items/MenuDetailItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMenudeleteApi } from '../apis/MenuApi';

function MenuDetail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const result = useSelector(state => state.menuReducer);
    const navigate = useNavigate();

    const deleteHandler = () => dispatch(getMenudeleteApi(id));

    useEffect(
        () => {
            if(result.deletemenu) {
                alert('메뉴가 삭제되었습니다.');
                navigate(`/menu`);
            }
        }, [result]
    );

    return (
        <>
            <h2>메뉴 상세</h2>
            <MenuDetailItem id={id} />
            <button>수정</button>
            <button onClick={deleteHandler}>삭제</button>
        </>
    );
} 

export default MenuDetail;