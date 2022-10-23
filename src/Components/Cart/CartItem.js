import { useDispatch } from 'react-redux';
import dataToys from '../../dataToys.js'
import { removeItemFromCart } from '../../redux/cartSlice.js';

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
            <p className='cart-p'>{cartItem.quantity} pc(s)</p>
            <p className='cart-p'>Total: ${toys.price*cartItem.quantity}</p>
            <span onClick = {() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
            <img className="icon cart-p" src="https://img.icons8.com/external-colours-bomsymbols-/344/external-bin-business-marketing-colors-set-2-colours-bomsymbols--2.png" alt='icon'/> 
            </span>
        </div>
        
    </div>)
}

export default CartItem;