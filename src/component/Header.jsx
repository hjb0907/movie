import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
  return(
    <div className="header">
        <div className="top">
          <div className="inner">
          <Link to='/login'>로그인</Link>
          <Link to='/movie'>이용권</Link>
          <Link to='/movie'>쿠폰	&#8231;코인</Link>
          <Link to='/movie'>웨이브온</Link>
          <Link to='/movie'>이벤트</Link>
        </div>
        </div>
        <div className="bottom">
          <div className="inner">
            <div className="bottom_wrap">
              <h1 className="logo">
                <Link to='/movie' alt='Wave'></Link>
              </h1>
              <div className="menu_wrap">
                <Link to='/movie'>홈</Link>
                <Link to='/movie'>카테고리</Link>
                <Link to='/movie'>LIVE</Link>
                <Link to='/movie'>MY</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;