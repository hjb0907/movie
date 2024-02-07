import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="inner">
                <div className="footer_wrap">
                    <div className="left">
                        <div className="col01">
                            <Link to='/movie'>회사소개</Link>
                            <Link to='/movie'>인재채용</Link>
                            <Link to='/movie'>서비스 소개</Link>
                            <Link to='/movie'>이용약관</Link>
                            <Link to='/movie'>개인정보 처리방침</Link>
                            <Link to='/movie'>고객센터</Link>
                        </div>
                        <div className="col02">
                            <p>콘텐츠웨이브 주식회사<span></span>대표이사 이태현<span></span> 고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)</p>
                            <p>사업자등록번호 220-88-38020 <span></span> 호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</p>
                            <p>
                            통신판매업 신고번호 : 제 2021-서울영등포-0585호 <span></span> 통신판매업 정보 공개 : <Link to='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-3802'>http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</Link>
                            </p>
                            <p>서울특별시 영등포구 여의나루로 60 포스트타워 19층 <span></span> 전자우편주소 : <Link to='mailto:helpdesk@wavve.com'> &nbsp;helpdesk@wavve.com</Link></p>
                            <p>Copyright&copy; 콘텐츠웨이브(주) All rights reserved.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_wrap">
                            <div className="wave_footer_logo_wrap">
                                <label for="wavveon-logo">
                                    <div className="logo_area"></div>
                                </label>
                            </div>
                            <div className="select_wrap">
                                <select id="wavveon-logo">
                                    <option value="" disabled="disabled" selected="selected" hidden="hidden">사업자용 웨이브 가입</option>
                                    <option value="http://www.wavveon.com/Index.aspx">웨이브온 서비스 소개</option>
                                    <option value="http://www.wavveon.com/join_pcbang.aspx">웨이브온 PC방 서비스</option>
                                    <option value="http://www.wavveon.com/join_library.aspx">웨이브온 도서관 서비스</option>
                                    <option value="http://www.wavveon.com/join_hospital.aspx">웨이브온 병원 서비스</option>
                                    <option value="http://www.wavveon.com/join_movienet.aspx">웨이브온 숙박 서비스</option>
                                    <option value="http://www.wavveon.com/join_others.aspx">웨이브온 일반 서비스</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;