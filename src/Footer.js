import './App.css';
import greenpaw from './greenpaw.png';

function Footer (){
    return (
        <div className="footer">
            <img className='greenimg' src={greenpaw} alt="paw" width='40px'/>
            <p className='foottext'>🏠 80 Forest Pine Dr., Dennis, MA 02641 </p>
            <p className='foottext'>📞 774-212-4587</p>
        </div>
    )
}

export default Footer;