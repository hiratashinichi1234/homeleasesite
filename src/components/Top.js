// Top.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Top.css';
import image1 from "../image/image1.jpg";
import image31 from "../image/image31.jpg";
import image32 from "../image/image32.jpg";
import image7 from "../image/image7.jpg";
import image6 from "../image/image6.jpg";
import image20 from '../image/image20.jpg';
import image25 from "../image/image25.jpg";

const Top = () => {
    

  return (
    <main role="main">
    <div className="jumbotron">
    <div className='item'>
      <img src={image1} alt="" />
      </div>
      <div className='item'>
     <img src={image31} alt="" />
     </div>
     <div className='item'>
     <img src={image32} alt=""  />
     </div>
      <div className="main-content">
        <h2 className="main-title">住まい作りのきらり不動産</h2>
        <p className="company-description">
       　<h3>いい部屋見つけて幸せ作り。</h3>
       きらり不動産ではリフォーム、賃貸、新築の相談なども承っております。
        </p>
      </div>
      </div>

<div className="container">
  {/* Example row of columns */}
  <div className="row">
    <div className="col-md-4">
      <h2>新築</h2>
      {/* ここに画像を追加 */}
      <img src={image6} alt="" width="400" height="400" className="img-thumbnail" />
      <p>お金のこと､性能のこと､家の寿命のこと...一生に1度の住まいづくり､気になることはたくさんあります｡きらり不動産は､お客様のさまざまな｢気になること｣や些細なことまで幅広くお応えする､高性能･長寿命の住まいをご提案しています｡ 気になることは弊社にお任せください。お客様の一生物の財産を私達が全力でサポート致します。</p>
      <p><a className="btn btn-secondary" href="#" role="button">もっと読む</a></p>
    </div>
    <div className="col-md-4">
      <h2>リフォーム</h2>
      {/* ここに画像を追加 */}
      <img src={image7} alt="" width="400" height="400" className="img-thumbnail" />
      <p>きらりリフォームネットは、全国の住宅リフォーム事例や工事店が簡単に探せる業界最大級のリフォーム工事店ネットワークです。窓・水まわり・エクステリアなどのリフォームや住宅の改修・増築までお客様のご希望に沿った多種多様な事例を探すことができ、お近くの工事店も検索することが可能です。</p>
      <p><a className="btn btn-secondary" href="#" role="button">もっと読む</a></p>
    </div>
    <div className="col-md-4">
      <h2>賃貸</h2>
      {/* ここに画像を追加 */}
      <img src={image25} alt="" width="400" height="400" className="img-thumbnail" />
      <p>お部屋探し情報なら、「きらり不動産」で！家賃・間取り・築年数など、ご希望の条件に合わせ、あなたにピッタリの物件が見つかります。光市以外の山口県の賃貸住宅（賃貸マンション・アパート・賃貸一戸建て）も豊富にご用意。</p>
      <p><a className="btn btn-secondary" href="#" role="button" >もっと読む</a></p>
    </div>
  </div>

  <hr />
   {/* CampaignSection */}
   <Container className="py-5 text-center">
        <div className="square-image-card mb-3 position-relative">
          <img src={image20} alt="Campaign" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
          <div className="image-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'orange', fontSize: '24px', fontWeight: 'bold' }}>
            <h3>キャンペーン・お得情報</h3>
            <p>きらり不動産では新築展示場も開催しております</p>
          </div>
        </div>
      </Container>
</div> {/* /container */}
</main>

  )
}

export default Top
