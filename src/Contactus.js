import Forminput from './Forminput';
import sandimg from './sand.jpg';
import Footer from './Footer';

function ContactUs (){
    return (<div className='main'>
        <div className='contact'>

            <div className='contbox'>
                <div className='cont'>
                <h2 className='header'>CONTACT US</h2>
                <p className='pabout'>Let us know what you think! We had love to hear your thoughts about our store, our web site, or anything else that comes to mind.</p>
                <img className='picabout' src={sandimg} alt="sand" width='360px' />
                </div>
                <div className='cont'>
                    <h3 className='header red'>KID & TOYS STORE</h3>
                    <p className='pabout'>🏠  80 Forest Pine Dr., <br></br>Dennis, MA 02641, USA </p>
                    <p className='pabout'> 📞 774-212-4587</p>
                </div>
                <div className='cont contactcont'>
                    <h3 className='header'> GET IN TOUCH </h3>
                    <Forminput />
                </div>
            </div>

          </div>
          <div>
          <Footer />
          </div> 
      </div>
    )
}

export default ContactUs;