import React from 'react';
import { useHistory } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser'; // 데이터 출력시 태그 없애주는 모듈
import {useState} from 'react';
const Header = () => {

  return (
    <header className="header">
      <div class="row top">
        <div class="col-9"></div>
        <div class="col-1">회원가입</div>
        <div class="col-1">문제신고</div>
        <div class="col-1">알림</div>
      </div>
    <hr></hr>
<div class="row">
    <div class="nav">
        <div class="col-3">
            <a href="/" class="logo"> 
                <img src="{{url_for('static',filename='img/logo.png')}}" alt="logo" width="100%"> 
                </img>
            </a>
        </div>
        <div class="col-6">
            <form method="GET" action="/project" name = {projectIdx} >
                <input type="text" placeholder="search" class="search" > </input>
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
<hr></hr>
  </header>
  )
}

export default Header
