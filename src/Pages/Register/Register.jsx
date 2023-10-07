import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="">
        <div className="card flex-shrink-0 rounded-lg w-full max-w-xl bg-[#FEEBEB]   mx-auto  my-20">
            <h1 className="text-center text-4xl font-semibold mt-12  mx-16 pb-10">Register your account </h1>
            <form className="card-body mx-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered rounded-md" required />
                </div>
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
                <div className="flex gap-x-3 items-center pt-2">
                        <input type="checkbox" required name="terms" id="" />
                        <p className="font-semibold">Accept <Link className="text-[#562EFE]">Term & Conditions</Link></p>
                    </div>
                <div className="form-control w-full mt-6">
                    <Link to='/login'><button type="submit" className="btn bg-[#562EFE] w-full  text-white hover:text-black ">Register</button></Link>
                </div>
                <div>
                    <h1 className="font-semibold text-base text-center mb-8 mt-2">Already Have An Account ? <Link to='/login'  className="text-[#562EFE]">Login</Link></h1>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;