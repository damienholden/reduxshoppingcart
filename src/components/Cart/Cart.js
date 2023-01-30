import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.name,
              quantity: cartItem.quantity,
              total: cartItem.totalPrice,
              price: cartItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
