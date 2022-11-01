import { useDispatch } from 'react-redux';
import dataToys from '../../dataToys.js'
import { removeItemFromCart, decreaseCart, increaseCart } from '../../redux/cartSlice.js';

const CartItem = ({cartItem}) => {
    
    const toys = dataToys.find (item => item.id === cartItem.toyId)
    const dispatch = useDispatch();
    
    return (<div className='box'>
        <div className='container'>
            <div className='cart-img'>
                <img src={`${toys.img}.jpg`} alt="toy" width='80px'/>
            </div>
            <div className='cart-sm'>
                <h4 className='cart-name'>{toys.name}</h4>
                <p>Price: ${toys.price}</p>
            </div>
        </div>
        <hr />
        <div className='container-two'>
        <div className="btn-box">
        <button className='btn-q inc' onClick = {() => {dispatch(decreaseCart({cartItemID: cartItem.id}))}
            }>-</button>
        <span className='btn-q spn'>{cartItem.quantity}</span>
        <button className='btn-q inc' onClick = {() => {dispatch(increaseCart({cartItemID: cartItem.id}))}
            }>+</button>
        </div>
            <p className='cart-p'>Total: ${toys.price*cartItem.quantity}</p>
            <span className="cart-p" onClick = {() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
            <img className="icon cart-p" src="https://img.icons8.com/external-colours-bomsymbols-/344/external-bin-business-marketing-colors-set-2-colours-bomsymbols--2.png" alt='icon'/> 
            </span>
        </div>
        
    </div>)
}

export default CartItem;