import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice,  getTotalItems} from "../../redux/cartSlice";
import CartItem from "./CartItem";



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalItems);

    return (<div>
        <h2 className="header-cart">Your Cart</h2>
        <div className="sub">
            <h3 className="sub-hh">Item(s): {quantity}</h3>
            <h3 className="sub-h">SUBTOTAL: ${totalPrice}</h3>
        </div>
        
        <div>
        {cartItems.map(cartItem => <CartItem  key={cartItem.id} cartItem={cartItem} />)}
        </div>
        
        
    </div>)
}

export default Cart;