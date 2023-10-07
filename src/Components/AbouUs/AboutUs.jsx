import img from '../../assets/Hero-1.png'
const AboutUs = () => {
    return (
        <div className="mb-20">
            < h1 className="font-bold text-5xl text-[#562EFE] mt-16 mb-10">About Us</h1>
            <div className='w-full flex gap-10 justify-center items-center'>
                <div className='w-1/3'>
                    <p className='text-justify text-lg'>
                        At <span className='text-blue-700 text-xl font-semibold '>Edu Event</span>, we are dedicated to being your premier partner in educational event management. With a wealth of experience, our team specializes in curating and executing educational events that leave a lasting impact. Our passion lies in creating dynamic a
                        Our passion lies in creating dynamic and engaging environments where learning thrives.
                    </p>

                </div>
                <div className='w-2/3'>
                    <ul>
                        <h1 className='text-2xl '>What Sets Us Apart:</h1>
                        <li>
                            <h4>
                                <span className='text-xl font-semibold text-blue-700'>1. Expertise:</span> Our team comprises seasoned professionals who are well-versed in every aspect of educational event management. From meticulous content curation to seamless logistics, we've got it all covered.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                <span className='text-xl font-semibold text-blue-700'>2. Tailored Solutions:</span> We understand that every educational event is unique. That's why we work closely with you to tailor our services to your specific needs and goals.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                <span className='text-xl font-semibold text-blue-700'>3. Innovation:</span>  We stay ahead of the curve, incorporating the latest trends and technologies to keep your events fresh and engaging.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                <span className='text-xl font-semibold text-blue-700'>4. Comprehensive Support:</span> From marketing strategies that boost attendance to flawless on-site execution, we handle every detail to ensure your event's success..
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;