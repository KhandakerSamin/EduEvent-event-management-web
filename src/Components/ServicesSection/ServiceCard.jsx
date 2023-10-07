
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const ServiceCard = ({categories}) => {

    const {title,image,long_description,short_description,price,id} = categories ;

    return (
        <div className='w-full bg-[#FFECEC] p-3 rounded-lg mb-10'>
            <div className=''>
            <img className='w-full h-60 rounded-lg mb-5'  src={image}alt="" />
            </div>
            <div className='flex items-center'>
                <RiMoneyDollarCircleFill className='text-4xl mb-4 gap-x-2 text-[#562EFE]'></RiMoneyDollarCircleFill>  
                <h1 className="font-bold text-5xl mb-5 text-[#562EFE]">{price}<span className='text-base text-black'>/session</span></h1>
            </div>
            <h1 className='font-bold text-2xl mb-3 text-black '>{title} </h1>
            <p className='mb-5 '>{short_description}</p>
            <Link to={`/details/${id}`}><button className='btn btn-primary w-full'>Take A Look</button></Link>
        </div>
    );
};

export default ServiceCard;