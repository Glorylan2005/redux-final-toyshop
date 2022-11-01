import '../../App.css';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Toy = ({toy}) => {
        const dispatch = useDispatch();
    
    return (<div className='toydiv'>
        <hr />
        <h4>{toy.name}</h4>
        <img className="toyimg" src={`${toy.img}.jpg`} alt="toy" width='220px' />
        <p className='p_price'>${toy.price}</p>
        <button onClick = {() => 
            {dispatch(addItemToCart({toy}))}
            } className='bttn'>Add to cart</button>
            <hr />
    </div>)
}

export default Toy;


