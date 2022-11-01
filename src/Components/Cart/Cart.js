import { useSelector } from "react-redux";
import { getCartItems, getTotals } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import Footer from "../../Footer";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
    
    return (<div>
        <h2 className="header-cart">Your Cart</h2>
        {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          </div>
          ) : (<div>
          <div className="sub">
            <h3 className="sub-hh">Item(s): {cart.cartTotalQuantity}</h3>
            <h3 className="sub-h">Subtotal: 💲{cart.cartTotalAmount}</h3>
        </div>
        
        <div>
        {cartItems.map(cartItem => <CartItem  key={cartItem.id} cartItem={cartItem} />)}
        </div>
        </div>
        )}
        
        <div>
            <Footer />
        </div>
        
    </div>)
}

export default Cart;