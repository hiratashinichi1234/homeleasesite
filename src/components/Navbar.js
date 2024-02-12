// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import'./Navbar.css';


const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/Top" className="navbar-brand">
        きらり不動産
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
               <span className="sr-only">(current)</span>
            </Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  ログイン
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  新規登録
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                　会社概要
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  エクステリア
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/serch" className="nav-link">
                  物件・売買
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  お問い合わせ
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-link nav-link">
                  ログアウト
                </button>
              </li>
            </>
          )}
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            検索
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
