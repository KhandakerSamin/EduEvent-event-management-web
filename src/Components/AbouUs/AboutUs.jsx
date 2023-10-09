import img from '../../assets/teamwork-concept-landing-page_52683-21300.jpg'
import img2 from '../../assets/silhouette-confident-businesspeople_1098-1768.avif'
const AboutUs = () => {
    return (
        <div className="mb-20 p-2">
            < h1 className="font-bold text-5xl text-[#562EFE] mt-16 mb-10">About Us</h1>
            <div className='w-full'>
                <div className='w-full flex flex-col md:flex-row items-center justify-center'>
                    <div className='w-full flex justify-center'>
                        <img className='w-3/4 ' src={img} alt="" />
                    </div>
                    <div className='w-full'>
                        <p className='text-justify text-xl mx-3'>
                            At <span className='text-blue-700 text-3xl font-semibold '>Edu Event</span>, we are dedicated to being your premier partner in educational event management. With a wealth of experience, our team specializes in curating and executing educational events that leave a lasting impact. Our passion lies in creating dynamic a
                            Our passion lies in creating dynamic and engaging environments where learning thrives.
                        </p>
                    </div>

                </div>
                <div className='w-full flex flex-col md:flex-row items-center justify-center gap-16 mx-2' >
                    <div className='my-10 mr-4'>
                        <ul className='text-justify'>
                            <h1 className='text-3xl font-bold text-blue-700'>What Sets Us Apart:</h1>
                            <li>
                                <h4 className='text-xl'>
                                    <span className='text-3xl font-semibold text-blue-700'>1. Expertise:</span> Our team comprises seasoned professionals who are well-versed in every aspect of educational event management. From meticulous content curation to seamless logistics, we've got it all covered.
                                </h4>
                            </li>
                            <li>
                                <h4 className='text-xl '>
                                    <span className='text-3xl font-semibold text-blue-700'>2. Tailored Solutions:</span> We understand that every educational event is unique. That's why we work closely with you to tailor our services .
                                </h4>
                            </li>
                            <li>
                                <h4 className='text-xl '>
                                    <span className='text-3xl font-semibold text-blue-700'>3. Innovation:</span>  We stay ahead of the curve, incorporating the latest trends and technologies to keep your events fresh and engaging.
                                </h4>
                            </li>
                            <li>
                                <h4 className='text-xl '>
                                    <span className='text-3xl font-semibold text-blue-700'>4. Comprehensive Support:</span> From marketing strategies that boost attendance to flawless on-site execution, we handle every detail ...
                                </h4>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-4'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;