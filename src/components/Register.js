// Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const Register = () => {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // 登録処理を追加
    login();

   // 登録成功後, トップにリダイレクト
   navigate('/top');
  };

  return (
    <div className="container text-center">
      <form className="form-signin">
        <img
          className="mt-5"
          src="/image8.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">新規登録</h1>
        <label htmlFor="inputName" className="sr-only">
          名前
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control mb-2"
          placeholder="名前"
          required
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="inputEmail" className="sr-only">
          メールアドレス
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="メールアドレス"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputPassword" className="sr-only">
          パスワード
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="パスワード"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> 入力を記憶
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={handleRegister}
        >
          新規登録
        </button>
        <p className="mt-5 mb-3 text-muted">© 2024-2028</p>
      </form>
      <Link to="/login">既に登録されておりますか? ログイン</Link>
      
    </div>
  );
};

export default Register;
