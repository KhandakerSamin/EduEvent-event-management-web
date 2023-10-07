import img from '../../assets/Hero-1.png'
const Banner = () => {
    return (
        <div className='h-[600px] w-[1440px]' style={{backgroundImage: `url(${img})`}}>
            
            <div className='pt-40'>
            <div className='bg-white h-fit w-fit mx-auto my-auto px-5 py-3'>
                <h1 className='font-bold text-5xl text-[#562EFE] '>Empower Minds, Ignite Futures</h1>
            </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-5xl font-bold text-white text-center '>Your Journey to Educational Event <br /> Excellence Begins Here!</h1>
            </div>
        </div>
    );
};

export default Banner;