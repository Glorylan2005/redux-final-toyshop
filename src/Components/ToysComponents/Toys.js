import dataToys from "../../dataToys"
import Toy from "./Toy";
import { useSelector } from 'react-redux';
import { getSelectedCategory } from "../../redux/toysSlice";

const Toys = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (<div>
        {dataToys
        .filter(toy => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === toy.category;
        })
        .map (toy=>
        <Toy key={toy.id}toy={toy}/>)}
    </div>)
}

export default Toys;