import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Toys from './Components/ToysComponents/Toys';

function Shop() {
    return (
    <div className="shop">
      
      <div className='block'>
        <AllCategories />
      </div>
      <div>
        <Toys />
      </div>
        
    </div>
    );
  }
  
  export default Shop;
  