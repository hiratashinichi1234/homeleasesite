import React from 'react';
import './Service.css'
import { Container, Row, Col } from 'react-bootstrap';
import image8 from '../image/image8.jpg';
import image9 from '../image/image9.jpg';
import image10 from '../image/image10.jpg';
import image12 from '../image/image12.jpg';
import image13 from '../image/image13.jpg';
import image15 from '../image/image15.jpg';
import image14 from '../image/image14.jpg';
import image16 from '../image/image16.jpg';
import image17 from '../image/image17.jpg';
import image18 from '../image/image18.jpg';
import image19 from '../image/image19.jpg';
import image20 from '../image/image20.jpg';

const Service = () => {
  return (
    <Container className="py-5">
      {/* ExteriorSection */}
      <Row>
        <Col md={6} className="text-center overflow-hidden position-relative">
          <div className="square-image-card mb-3">
            <img src={image16} alt="Exterior 1" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="image-overlay">
              <h3>デザイナーパーツ</h3>
              <p>住む人それぞれにあった求めるものを提供しております。</p>
            </div>
          </div>
          <hr />
        </Col>
        <Col md={6} className="text-center overflow-hidden position-relative">
          <div className="square-image-card mb-3">
            <img src={image15} alt="Exterior 2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="image-overlay">
              <h3>きらりG</h3>
              <p>きらり不動産ならではの温もりのあるお家をお届けします。</p>
            </div>
          </div>
          <hr />
        </Col>
      </Row>

      {/* ExteriorSection2 */}
      
      <h3>エクステリア</h3>
    
      <Row>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image10} alt="Exterior 3" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>カーポート</h3>
    <p>車は今は生活に欠かせないアイテムだからこそスペースを確保して大切にしたいもの</p>
  </Col>
  <Col md={4} className="mt-3 text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image8} alt="Exterior 4" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>庭・テラス</h3>
    <p>緑空間を大切にするテラスは和の心を思い出させてくれます</p>
  </Col>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image12} alt="Exterior 4" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>バルコニーまわり</h3>
    <p>新しくバルコニーを付けたい床をきれいにしたいなどおすすめです</p>
  </Col>
  {/* 他の画像も同様に追加 */}
</Row>

{/* RelationSection */}

<h3>エクステリア2</h3>

<Row>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image19} alt="Relation 1" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>シリーズ・商品</h3>
    <p>門まわり、車庫まわりなどエクスエクステリアのコーディネートを揃えております</p>
  </Col>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image13} alt="Relation 2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>門まわり</h3>
    <p>住宅スタイルにふさわしい門を豊富なデザインやカラーを選択できるようになっております</p>
  </Col>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image17} alt="Relation 2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>フェンス・スクリーン</h3>
    <p>フェンスは隣地敷地をはっきりとさせる役割があります</p>
  </Col>
  {/* 他の画像も同様に追加 */}
</Row>

{/* RelationSection */}

<h3>エクステリア3</h3>

<Row className='mt-7'>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image9} alt="Relation 1" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>ゴミ収納庫</h3>
    <p>コストパフォーマンスに優れたゴミ収納庫も用意しております</p>
  </Col>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image18} alt="Relation 2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>その他・エクステリア</h3>
    <p>エクステリアのユーテリィティ商品をラインナップ</p>
  </Col>
  <Col md={4} className="text-center overflow-hidden img-thumbnail">
    <div className="square-image-card mb-3">
      <img src={image14} alt="Relation 2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
    </div>
    <h3>公共エクステリア</h3>
    <p>公共スペースだけでなく商業施設、民間施設にも商品を提供しております</p>
  </Col>
  {/* 他の画像も同様に追加 */}
</Row>


      {/* CampaignSection */}
      <Container className="py-5 text-center">
        <div className="square-image-card mb-3 position-relative">
          <img src={image20} alt="Campaign" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
          <div className="image-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            <h3>キャンペーン・お得情報</h3>
            <p>きらり不動産では新築展示場も開催しております</p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Service;
