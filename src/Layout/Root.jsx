import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber/Navber';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto '>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;