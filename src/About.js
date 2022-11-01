import './App.css';
import image from './toys.jpg';
import image1 from './palette.jpg';
import image2 from './hands.jpg';
import image3 from './grow.jpg';
import image4 from './happy.jpg';
import image5 from './likes.jpg';
import Footer from './Footer';
import { Link } from "react-router-dom";

function About() {
    return (
    <div className="about">

        <h1 className="header">Welcome to Kid & Toys Store! </h1>
        <img  className='picabout' src={image} alt="toys"  width='500px'/>
        <p className='pabout' >We are a team of enthusiastic developers and entrepreneurs who decided to convert their common experience into this web store. We hope you’ll like it as much as we do and have a great shopping experience here. Our prime goal is to create a shop in which you can easily find whatever product you need.</p>
        <p className="header">OUR CORE VALUES</p>

      <div className='values'>

        <div className='value'>
          <img className='pic' src={image1} alt="pic" width='100px' />
          <p className='valuep'>Be Adventurous, Creative, and Open-Minded</p>
        </div>

        <div className='value'>
          <img className='pic' src={image2} alt="pic" width='100px' />
          <p className='valuep' >Create Long-Term Relationships with Our Customers</p>
        </div>

        <div className='value'>
          <img className='pic' src={image3} alt="pic"/>
          <p className='valuep'>Pursue Growth and Learning</p>
        </div>

        <div className='value'>
          <img className='pic' src={image4} alt="pic" width='100px' />
          <p className='valuep'>Inspire Happiness and Positivity</p>
        </div>

        <div className='value'>
          <img className='pic' src={image5} alt="pic" width='100px' />
          <p className='valuep'>Make Sure Our Customers are Pleased</p>
        </div>
      </div>
      <p className="header">KEEP IN CONTACT WITH US</p>
      <p className='pabout' >We're continually working on our online store and are open to any suggestions. If you have any questions or proposals, please do not hesitate to contact us.</p>
      
      <div className='values'>
      <Link to="/" className='link'><button className='bttn'>Start Shopping</button></Link>
      <Link to="/contactus" className='link'><button className='bttn'>Contact Us</button></Link>
      </div>
      
      <Footer />
      </div>
    );
  }
  
  export default About;