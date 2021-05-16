import React from 'react'
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';

const Main = ()=>{

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div>
                    <div id="carousel-example-generic" className="carousel slide" >
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="item active">
                          <img src={banner1} width="100%" alt="banner1"/>
                          <div className="carousel-caption" color= "black">
                          </div>
                        </div>
                        <div className="item">
                          <img src={banner2} width="100%" alt="banner2"/>
                          <div className="carousel-caption" color= "black">
                          </div>
                        </div>
                        <div className="item">
                          <img src={banner3} width="100%" alt="banner3"/>
                          <div className="carousel-caption" color= "black">
                          </div>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      </a>               
                      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
  )
}

export default Main

