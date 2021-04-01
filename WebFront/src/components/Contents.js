import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'; //부트스트랩 적용
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; //부트스트랩 적용
import {useState} from 'react';
import Axios from 'axios';

const Contents = () => {

  const [boardContent, setContent] = useState({
    title: '',
    content:''
  })

  const submitContent = ()=> {
    Axios.post('http://localhost:5000/api/insert',{
      title: boardContent.title,
      content: boardContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e =>{
    const {name, value} = e.target;
    setContent({ //비구조화 할당
      ...boardContent, 
      [name]: value
    })
    console.log(boardContent);
  }

  return (
    <section>
      <div className='form-wrapper'>
      <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setContent({
            ...boardContent,
            content: data
          })
          console.log(boardContent);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />

      <button 
        className="submit-button"
        onClick={submitContent}
      >입력</button>
    </div>
  </section>
  )
}

export default Contents
