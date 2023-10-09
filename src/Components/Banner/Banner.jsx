import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/Hero-1.png';

const Banner = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      className='bg-cover bg-center h-[600px] md:h-[400px] lg:h-[600px] xl:h-[800px] w-full'
      style={{ backgroundImage: `url(${img})` }}
      data-aos='fade'
      data-aos-duration='5000'
    >
      <div className='pt-10 md:pt-20 lg:pt-40'>
        <div className='bg-white h-auto w-full md:w-fit mx-auto my-auto px-5 py-3'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#562EFE] ' data-aos='fade-up'>
            Empower Minds, Ignite Futures
          </h1>
        </div>
      </div>
      <div className='mt-4 md:mt-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-white text-center ' data-aos='fade-up'>
          Your Journey to Educational Event <br /> Excellence Begins Here!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
