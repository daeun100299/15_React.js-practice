function LoginForm() {
    return (
        <div>
            <label>아이디 : </label> 
            <input type="text" />
            <br />
            <label>비밀번호 : </label> 
            <input type="password" />

            <button>로그인</button>
        </div>
    );
}

export default LoginForm;