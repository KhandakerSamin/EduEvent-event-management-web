import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Register = () => {

    const { createUser,updateimgName  } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth(app);


    const handleRegister = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // Check if the input has less than 6 characters
        if (password.length < 6) {
            return swal("Oops!!", "Total length of password should be at least 6 characters", "error");
        }
        
        // Check if the input contains at least one capital letter
        if (!/[A-Z]/.test(password)) {
            return swal("Oops!!", "Include at least one capital letter", "error");
        }
        
        // Check if the input contains any special characters
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            return swal("Oops!!", "Include at least one special character", "error");
        }
        

        // create user

        createUser(email, password, photo)
            .then(res => {
                updateimgName(photo,name)
                    .then(res => {
                        console.log(res);
                        swal("Registration Complete", "Please Sign In!", "success");
                        navigate(location?.state? location.state: '/');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err)
                return swal("Opps !! ", "This Email Already Used", "error");
            })
    }

    return (
        <div className=" mx-4">
            <div className="card flex-shrink-0 rounded-lg w-full max-w-xl bg-[#FEEBEB]   mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  mx-16 pb-10">Register your account </h1>
                <form onSubmit={handleRegister} className="card-body mx-8">
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
                        <input type="url" name="photo" placeholder="Enter your photo url" className="input input-bordered rounded-md" required />
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
                        <button type="submit" className="btn bg-[#562EFE] w-full normal-case text-lg text-white hover:text-black ">Register</button>
                    </div>
                    <div>
                        <h1 className="font-semibold text-base text-center mb-8 mt-2">Already Have An Account ? <Link to='/login' className="text-[#562EFE]">Login</Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;