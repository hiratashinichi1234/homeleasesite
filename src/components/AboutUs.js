// AboutUs.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'; // スタイルシートのインポート
import image28 from "../image/image28.jpg";
import image29 from "../image/image29.jpg";
import image30 from "../image/image30.jpg";

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <Row>
        <Col>
          <h2>会社概要</h2>
          <img src={image28} alt="" width="900" height="500" className="about-us-image" />
          <p>
            弊社は不動産に関する様々なサービスを提供しており、お客様の住まいづくりや投資において、最適なサポートをご提供しています。
          </p>
          <p>
            豊富な経験と専門知識を持つスタッフが、お客様のご要望に合わせた不動産の購入、売却、リフォーム、賃貸などをサポートいたします。
          </p>
          <p>
            お気軽にご相談ください。皆様との信頼関係を大切にし、より良い住環境づくりに貢献してまいります。
          </p>
        </Col>
      </Row>

      {/* 会社情報 */}
      <Row className="mt-5">
        <Col>
          <h2>会社情報</h2>
          <table className="kaisha">
            <tr>
              <th>会社名</th>
              <td>レスポンシブテーブル株式会社</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>愛知県名古屋市中区栄0-0-0</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>052-0000-0000</td>
            </tr>
            <tr>
              <th>内容</th>
              <td>会社概要などでよく使う、レスポンシブデザインに対応したテーブルの作成</td>
            </tr>
          </table>
        </Col>
      </Row>

      {/* 履歴 */}
      <Row className="mt-5">
        <Col>
          <h2>きらり不動産の歴史と実績</h2>
          <ul class="timeline">
  <li>
    <p class="timeline-date">2007年2月</p>
    <div class="timeline-content">
      <h3>東京の本社オープン</h3>
      <p>１号店誕生。少数精鋭ながらお客様との契約を多く勝ち取る。</p>
    </div>
  </li>
  <li>
    <p class="timeline-date">2010年3月</p>
    <div class="timeline-content">
      <h3>大阪・名古屋に新店舗オープン</h3>
      <p>安くて災害にも強い住まい作りを好評に日本３代都市の大阪・名古屋に新店をオープン。</p>
    </div>
  </li>
  <li>
    <p class="timeline-date">2014年2月</p>
    <div class="timeline-content">
      <h3>バンクーバーでの住みたい家NO1に選ばれる</h3>
      <p>カナダでの住みたい住居の家代表にきらり不動産が受賞に選ばれる。</p>
    </div>
  </li>
</ul>
        </Col>
      </Row>

      {/* 実績 */}
      <Row className="mt-5">
        <Col>
          <h2>店舗情報</h2>
          <h3>大阪支店</h3>
          <p>大阪梅田を拠点とした店舗です。</p>
          <img src={image29} alt="" width="500" height="250" className="about-us-image"  />
          <iframe 
  　　　title="Google Map"
  　　　width="100%"
  　　　height="450"
  　　　style={{ border: 0 }}
  　　　allowFullScreen={true}
  　　　loading="lazy"
  　　　referrerPolicy="no-referrer-when-downgrade"
  　　　src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2530699684585!2d135.49585907591882!3d34.69879638331468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6ed0eb883ad%3A0x9e284a7b652953ec!2z44K544K_44Oz44OA44O844OJ5LiN5YuV55Sj!5e0!3m2!1sja!2sjp!4v1706445709890!5m2!1sja!2sjp"
　　　　></iframe>

        <h3>名古屋支店</h3>
        <p>名古屋を拠点とした店舗です。</p>
        <img src={image30} alt="" width="500" height="250" className="about-us-image" />
　　　　　<iframe
  　　　title="Google Map"
  　　　width="100%"
  　　　height="350"
  　　　style={{ border: '0' }}
  　　　allowFullScreen={true}
  　　　loading="lazy"
  　　　referrerPolicy="no-referrer-when-downgrade"
  　　　src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26090.356897277063!2d136.88701711655938!3d35.174208935856974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370bfaf23503d%3A0x5e784de79d823190!2z44Ob44K344G_44Gj44Gk5LiN5YuV55Sj!5e0!3m2!1sja!2sjp!4v1706446273231!5m2!1sja!2sjp"
　　　　></iframe>

         </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
