import React from 'react';
import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card header">
      <div className="headerName" onClick={() => props.handleShow(false)}>Shopping Cart App</div>
      <div onClick={() => props.handleShow(true)} className="cart-icon"> Cart
        <sup> {props.count} </sup>
      </div>
    </div>
  );
}

export default Header;
