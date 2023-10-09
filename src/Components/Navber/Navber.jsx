import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/mainlogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
import userImg from '../../assets/user.png'
const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
        swal("Signed Out!", "Signed Out Successfully!", "success");
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-x-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img className='w-24 md:w-36 h-9 md:h-14' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-x-3 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user && (
                    <p className='font-semibold text-blue-700 hidden md:block mr-3'>
                        {user.displayName || "User"} {/* Use "User" as a fallback */}
                    </p>
                )}
                <div>{user ?
                    <img className='rounded-full w-[35px] md:w-[50px] h-[35px] md:h-[50px] mr-5' src={user.photoURL} alt="" />
                    :
                    <img className='w-10 h-10 mr-4' src={userImg} alt="" />
                }
                </div>

                {
                    user ? (
                        <Link to=''>
                            <a onClick={handleSignOut} className="btn  bg-[#562EFE] text-white normal-case font-bold text-md md:text-lg  border-none px-3 md:px-5  ">Sign Out</a>
                        </Link>
                    ) : (
                        <Link to='/login'>
                            <a className="btn  bg-[#562EFE] text-white border-none px-3 md:px-5 normal-case text-md md:text-lg font-bold">Sign In</a>
                        </Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navber;