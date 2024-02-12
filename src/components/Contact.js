import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      {/* 新しいセクション */}
      <div className="section-header">
        <h2>お問い合わせ・アクセス</h2>
        <p>弊社へのお問い合わせやアクセスはこちらから<br/>
         お客様が一生の財産である不動産を見つけれるように全力でサポートしてまいります。
        </p>
      </div>
  
    <Container className="contact-container">
      <Row>
        {/* 左半分の地図 */}
        <Col className="map-container">
          {/* Google Map の埋め込みコードなどを追加 */}
          <iframe
  title="Google Map"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13118.539328595021!2d134.9331387!3d34.7143893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d5e79133ffff%3A0xd26fbd316aa22a4d!2z6ICA55CG5LiN5YuV55Sj!5e0!3m2!1sja!2sjp!4v1706414965561!5m2!1sja!2sjp"
></iframe>

        </Col>

        {/* 右半分のお問い合わせフォーム */}
        <Col className="form-container">
          <h2>お問い合わせ</h2>
          <Form>
            {/* お問い合わせフォームの入力項目 */}
            <Form.Group controlId="formName">
              <Form.Label>名前</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>内容</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              送信
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;
