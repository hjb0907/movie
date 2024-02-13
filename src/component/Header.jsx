import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
  return(
    <div className="header">
        <div className="top">
          <div className="inner">
          <Link to='/login'>로그인</Link>
          <Link to='/'>이용권</Link>
          <Link to='/'>쿠폰	&#8231;코인</Link>
          <Link to='/'>웨이브온</Link>
          <Link to='/'>이벤트</Link>
        </div>
        </div>
        <div className="bottom">
          <div className="inner">
            <div className="bottom_wrap">
              <h1 className="logo">
                <Link to='/' alt='Wave'></Link>
              </h1>
              <div className="menu_wrap">
                <Link to='/'>홈</Link>
                <Link to='/'>카테고리</Link>
                <Link to='/'>LIVE</Link>
                <Link to='/'>MY</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;