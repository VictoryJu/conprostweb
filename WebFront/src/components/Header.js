import React from 'react'
 // 데이터 출력시 태그 없애주는 모듈
const Header = () => {

return (
<div>
    <div class="row top">
    <div class="col-9"></div>
    <div class="col-1">회원가입</div>
    <div class="col-1">문제신고</div>
    <div class="col-1">알림</div>
</div>
<hr/>
<div class="row">
    <div class="nav">
        <div class="col-3">
            <a href="/" class="logo"> 
                <img src="/img/logo.png" alt="logo" width="100%"/> 
            </a>
        </div>
        <div class="col-6">
            <form method="GET" action="/project" name = {projectIdx} >
                <input type="text" placeholder="search" class="search"/>
            </form>
        </div>
        <div class="col-1">
            <a href="#">About</a>
        </div>
        <div class="col-1">
            <a href="#">Login</a>
        </div>
        <div class="col-1">
            <a href="#">Mypage</a>
        </div>
    </div>
</div>
<hr/>
</div>
)
}

export default Header
