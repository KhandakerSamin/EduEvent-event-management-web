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
      className='h-[600px] w-[1440px]'
      style={{ backgroundImage: `url(${img})` }}
      data-aos='fade'
      data-aos-duration='5000'
    >
      <div className='pt-40'>
        <div className='bg-white h-fit w-fit mx-auto my-auto px-5 py-3'>
          <h1 className='font-bold text-5xl text-[#562EFE] ' data-aos='fade-up'>
            Empower Minds, Ignite Futures
          </h1>
        </div>
      </div>
      <div className='mt-8'>
        <h1 className='text-5xl font-bold text-white text-center ' data-aos='fade-up'>
          Your Journey to Educational Event <br /> Excellence Begins Here!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
