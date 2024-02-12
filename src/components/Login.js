// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


 

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // ログイン処理を追加
   // ログイン成功時の処理
   login();

   // ログイン成功後、トップにリダイレクト
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
        <h1 className="h3 mb-3 font-weight-normal">ログイン</h1>
        <label htmlFor="inputEmail" className="sr-only">
          メールアドレス
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="メールアドレス"
          required
          autoFocus
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
          onClick={handleLogin}
        >
          ログイン
        </button>
        <p className="mt-5 mb-3 text-muted">© 2024-2028</p>
      </form>
      <Link to="/register">新規登録はこちら</Link>
    </div>
  );
};

export default Login;
