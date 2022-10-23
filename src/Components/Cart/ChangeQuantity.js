
const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity+1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <=1) return;
        const newQuantity = quantity-1;
        setQuantity(newQuantity)
    }

    return (<div className="btn-box">
        <button className='btn-q inc' onClick = {removeQuantity}>-</button>
        <span className='btn-q spn'>{quantity}</span>
        <button className='btn-q inc' onClick = {addQuantity}>+</button>
    </div>)
}

export default ChangeQuantity;