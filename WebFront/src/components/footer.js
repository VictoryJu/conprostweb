import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {

  return (
<footer className="footer">
  <hr/>
    <div className="container text-center">
        <div className="row">
            <div className="col-12">
                <a href="/users" className="logo"> 
                    <img src={logo} alt="logo" width="150px"/> 
                </a>
                <br/>
                <p>
                    개발 : 최승주, 유승현<br/><br/>
                    <span className="rights">4662 경기도 부천시 지봉로 43<br/>
                    Copyright © The Conprost All rights reserved.</span>
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer