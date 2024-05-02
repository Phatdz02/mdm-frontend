// Header.js

import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <LanguageSelector />
        <DownloadButton />
      </div>
      <div className="right-section">
        <LoginButton />
        <SignUpButton />
      </div>
    </header>
  );
}

function LanguageSelector() {
  return (
    <select>
      <option value="en">US</option>
      <option value="vi">VN</option>
    </select>
  );
}

function DownloadButton() {
  return (
    <button>Tải ứng dụng </button>
  );
}

function LoginButton() {
  return (
    <button>Đăng nhập</button>
  );
}

function SignUpButton() {
  return (
    <button>Đăng ký</button>
  );
}

export default Header;
