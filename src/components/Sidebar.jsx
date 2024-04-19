import { categories } from '../constants';
import Categories from './Categories';

const Sidebar = () => {
    return (
        <div className='flex flex-col p-1 md:p-4'>
            {categories.map((item, index) =>
            (<Categories key={index} item={item} />))}
        </div>
    )
}

export default Sidebar