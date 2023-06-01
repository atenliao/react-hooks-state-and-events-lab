import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const IteminCart = inCart? "in-cart":" "
  const btnColor = inCart?"remove":"add"
  function addItem(){
    setInCart((inCart)=>!inCart)
  }
  return (
    <li className={IteminCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnColor} onClick={addItem}>{inCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
