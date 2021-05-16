import React from 'react'
import logo from '../images/logo.png';
const Header = () => {

return (
<header classNameName='header'>
    <div>
        <div className="row top">
        <div className="col-9"></div>
        <div className="col-1">회원가입</div>
        <div className="col-1">문제신고</div>
        <div className="col-1">알림</div>
    </div>
    <hr/>
    <div className="row">
        <div className="nav">
            <div className="col-3">
                <a href="/#" className="logo"> 
                    <img src={logo} alt="logo" width="100%"/> 
                </a>
            </div>
            <div className="col-6">
                <form method="GET" action="/project" name="projectIdx">
                    <input type="text" placeholder="search" className="search" />
                </form>
            </div>
            <div className="col-1">
                <a href="/#">About</a>
            </div>
            <div className="col-1">
                <a href="/#">Login</a>
            </div>
            <div className="col-1">
                <a href="/#">Mypage</a>
            </div>
        </div>
    </div>
    <hr/>
    </div>
</header>
)
}
export default Header
