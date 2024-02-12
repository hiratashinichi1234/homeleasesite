import React, { useState } from 'react';
import image21 from "../image/image21.jpg";
import image22 from "../image/image22.jpg";
import image23 from "../image/image23.jpg";
import image24 from "../image/image24.jpg";
import image25 from "../image/image25.jpg";
import image26 from "../image/image26.jpg";
import image27 from "../image/image27.jpg";
import './Serch.css';

const Serch = () => {

    const [showAllTags, setShowAllTags] = useState(false);

  const handleViewAllTagsClick = () => {
    setShowAllTags(!showAllTags); // トグルするように変更
    // ここで必要ならばデータを取得したり、表示する処理を追加
    };
  return (
    <div>
      {/* Work Section */}
      <section className="work-section">
        <img src={image21} alt="Work Image" className="work-image" />
        <div className="work-content">
          <h3>My home innovation</h3>
          <p>きらり不動産がお届けする洗練されたデザインと建築技術</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="search-bar">
        {/* 検索バーのコンポーネントを追加 */}
        <span className="search-text">検索</span>
        <input type="text" placeholder="Search..." />
      </div>

      {/* View All Tags Button */}
      <button onClick={handleViewAllTagsClick} className="view-all-tags-button">
        {showAllTags ? 'タグを閉じる' : 'タグを開く'}
      </button>

      {/* Tags Section */}
      {showAllTags && (
        <section className="tags-section">
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>#店舗併用住宅 (2)</li>
            <li style={{ marginRight: '10px' }}>#ペットと暮らす (6)</li>
            <li style={{ marginRight: '10px' }}>#外観デザイン (65)</li>
            <li style={{ marginRight: '10px' }}>#平屋 (18)</li>
            <li style={{ marginRight: '10px' }}>#設備専用 (5)</li>
            <li style={{ marginRight: '10px' }}>#設備共用 (8)</li>
            <li style={{ marginRight: '10px' }}>#共同住宅 (39)</li>
            <li style={{ marginRight: '10px' }}>#ー戸建 (18)</li>
            <li style={{ marginRight: '10px' }}>#公務員住宅 (2)</li>
            <li style={{ marginRight: '10px' }}>#マンション (6)</li>
            <li style={{ marginRight: '10px' }}>#アパート (65)</li>
            <li style={{ marginRight: '10px' }}>#都市再生 (18)</li>
            {/* 他のタグをここに追加 */}
          </ul>
        </section>
      )}

      {/* Example Section */}
      <h2 className='sale'>弊社の販売物件ご紹介</h2>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">平屋</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  1階だけでも堂々とした広さ
                </a>
              </h3>
              <div className="mb-1 text-muted">Aスタッフ</div>
              <p className="card-text mb-auto">平屋なのに家族6人は住める程ゆったりとした空間ですよ。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image22}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">一戸建</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  新婚や新しい家族の誕生にきらり不動産のオススメラインナップ
                </a>
              </h3>
              <div className="mb-1 text-muted">Bスタッフ</div>
              <p className="card-text mb-auto">間取りも外観も豊富な種類があってどれも生活を満たしてくれますよ。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image23}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">アパート</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  どんな災害でも安心できる鉄筋コンクリート造り
                </a>
              </h3>
              <div className="mb-1 text-muted">Cスタッフ</div>
              <p className="card-text mb-auto">防音や災害にでも強い造りのあるアパート物件紹介しております。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image24}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">マンション</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  駅や買い物にも近い立地にあるので生活にも困らない
                </a>
              </h3>
              <div className="mb-1 text-muted">Dスタッフ</div>
              <p className="card-text mb-auto">仕事の通勤や買い物なんかに近い場所や幅広い条件のマンションを取り扱っております。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image25}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">公務員住宅</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  地方や都会からの転勤にはうってつけの住居
                </a>
              </h3>
              <div className="mb-1 text-muted">Eスタッフ</div>
              <p className="card-text mb-auto">突然の転勤や引っ越しに選ぶ住居も取り扱っておりますので是非。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image26}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">店舗併用住宅</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">
                  持ち家に仕事スペースを設ける
                </a>
              </h3>
              <div className="mb-1 text-muted">Fスタッフ</div>
              <p className="card-text mb-auto">自営業や事務所など、あなたのライフスタイルに応じたスペースになります。</p>
              <a href="#">こちらの物件の詳細</a>
            </div>
            <img
              src={image27}  width="200" height="250"
              alt="Thumbnail"
              className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
            />
          </div>
        </div>
        {/* 他の物件も同様に追加 */}
      </div>
    </div>
  );
};

export default Serch;
