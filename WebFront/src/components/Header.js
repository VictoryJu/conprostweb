import React from 'react'
import ReactHtmlParser from 'html-react-parser'; // 데이터 출력시 태그 없애주는 모듈
import {useState} from 'react';
const Header = () => {

  const [viewContent, setViewContent] = useState([]);

  return (
    <header className="header">
    <h2>게시판</h2>
      <div className='content-container'>
        {viewContent.map(element => 
          <div>
            <h2>{element.title}</h2>
              <div>
                {ReactHtmlParser(element.content)} 
              </div>
          </div>
        )}
      </div>
  </header>
  )
}

export default Header
