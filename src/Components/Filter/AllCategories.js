import Filter from "./Filter";


const AllCategories = () => {
    return (<div>
        <h2 className="header">Shop Toys By Category</h2>

        {['BATH TOYS', 'TODDLER TOYS', 'PRESCHOOL TOYS', 'PRETEND PLAY', 'ALL'].map(category => <Filter key={category.toString()} category={category} />)}
  
      </div>
    );
  }
  
  export default AllCategories;