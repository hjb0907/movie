import React from "react";
import { Link } from "react-router-dom";

const Login = ()=>{
    return(
        <div className="login">
            <div className="inner">
                <div className="login_wrap">
                    <h3>로그인</h3>
                    <p>Wave 계정으로 로그인</p>
                    <div className="input_wrap">
                        <input type="text" name="id" id="id" placeholder="이메일 주소 또는 아이디"/>
                        <input type="password" name="pw" id="pw" placeholder="비밀번호"/>
                    </div>
                    <div className="check_wrap">
                        <input type="checkbox" name="save_id" id="save_id" />
                        <label htmlFor="save_id">아이디 저장</label>
                        <input type="checkbox" name="auto_login" id="auto_login" />
                        <label htmlFor="auto_login">자동 로그인</label>
                    </div>
                    <button>로그인</button>
                    <div className="sub_wrap">
                        <Link to='/'>아이디 찾기</Link>
                        <Link to='/'>비밀번호 재설정</Link>
                        <Link to='/'>회원가입</Link>
                    </div>
                    <p className="desc">
                        SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.<br/>
                        기존 POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;