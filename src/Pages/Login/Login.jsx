import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext (AuthContext);


    // const handleGoogleLogin = () => {

    //     googleLogin()
    //     .then( res => {
    //         console.log(res);
    //     })
    //     .catch( err => {
    //         console.log(err);
    //     })
    // }


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                console.log(res);
                //
                // navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="">
            <div className="card  flex-shrink-0 rounded-lg w-full max-w-xl bg-[#FEEBEB]  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  mx-16 pb-10">Login your account </h1>
                <form onSubmit={handleLogin} className="card-body mx-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6 w-full">
                        <button className="btn bg-[#562EFE] w-full text-white hover:text-black " type="submit">Login</button>
                    </div>
                    <button  className="btn btn-outline bg-white w-full mt-5 mb-2 border-none text-black">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Continue with google
                    </button>
                    <div>
                        <h1 className="font-semibold text-base text-center mb-8 mt-2">Dont’t Have An Account ? <Link to='/register' className="text-[#562EFE]">Register</Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;