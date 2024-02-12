// Home.js
import React from 'react';
import './Home.css';
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";  // Image 2 のファイルパスを指定
import image3 from "../image/image3.jpg";  // Image 3 のファイルパスを指定


const Home = () => {
  return (
    <div className="home-container">
      <div className='item'>
      <img src={image1} alt="" />
      </div>
      <div className='item'>
     <img src={image2} alt="" />
     </div>
     <div className='item'>
     <img src={image3} alt=""  />
     </div>

      <div className="home-content">
        <h2 className="home-title">あなたの住まいが見つかるきらり不動産</h2>
        <p className="home-description">
       　きらり不動産で理想の住まいを探しませんか?
        </p>
      </div>

     
    </div>
  );
};

export default Home;
