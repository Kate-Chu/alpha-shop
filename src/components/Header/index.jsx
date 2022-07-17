import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light p-lg-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">男款</li>
          <li className="nav-item mx-3">女款</li>
          <li className="nav-item mx-3">最新消息</li>
          <li className="nav-item mx-3">客製商品</li>
          <li className="nav-item mx-3">聯絡我們</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
