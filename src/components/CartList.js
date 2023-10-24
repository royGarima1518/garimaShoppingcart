import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="cart-list-container">
      {CART?.map((cartItem, cartindex) => {
        return (
          <div className="cart-item" key={cartindex}>
            <img src={cartItem.url} width={40} alt={cartItem.name} />
            <span> {cartItem.name} </span> 
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        /*spread operator(...) */
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span className="quantity"> {cartItem.quantity} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>


             {/* Total Price Calculation*/}
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      {/* Total Price Display */}
      <p className="cart-total">
        Total:{" "}
        <span>
          Rs.{" "}
          {CART.map((item) => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)}
        </span>
        {/* ((accumulator + current value ) => accumulator + currentValue, 0); */}
      </p>
    </div>
  );
}

export default CartList;
