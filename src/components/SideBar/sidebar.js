// Sidebar.js

import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Futapay</a></li>
        <li><a href="#">Thông tin tài khoản</a></li>
        <li><a href="#">Lịch sử mua vé</a></li>
        <li><a href="#">Địa chỉ của bạn</a></li>
        <li><a href="#">Đặt lại mật khẩu</a></li>
        <li><a href="#">Đăng xuất</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
