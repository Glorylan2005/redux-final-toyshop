import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Toys from './Components/ToysComponents/Toys';
import Footer from './Footer';

function Shop() {
    return (<div>
    <div className="shop">
      
      <div className='block'>
        <AllCategories />
      </div>
      <div>
        <Toys />
      </div>
    </div>
    <div>
        <Footer />
      </div>
    </div>
    );
  }
  
  export default Shop;
  