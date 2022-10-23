import '../../App.css';
import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Toy = ({toy}) => {
    const [quantity, setQuantity] = useState (1);
    const dispatch = useDispatch();
    

    return (<div className='toydiv'>
        <hr />
        <h4>{toy.name}</h4>
        <img className="toyimg" src={`${toy.img}.jpg`} alt="toy" width='220px' />
        <p className='p_price'>${toy.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />            
        <button onClick = {() => 
            {dispatch(addItemToCart({toy, quantity}))}
            } className='bttn'>Add to cart</button>
            <hr />
    </div>)
}


export default Toy;


