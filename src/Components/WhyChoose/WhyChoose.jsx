import img from '../../assets/flat-people-asking-questions_23-2148929673.jpg'
import img2 from '../../assets/positive-lettering-concept_23-2148463395.jpg'
const WhyChoose = () => {
    return (
        <section>
            <h1 className="font-bold text-5xl text-[#562EFE] mt-16 mb-10 ml-2">Why Choose us?</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-x-14 p-3'>
                <div className='md:col-span-2 w-full flex-shrink'>
                    <div className="collapse w-full collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Experience Excellence
                        </div>
                        <div className="collapse-content">
                            <p>Our interactive workshops and webinars stand out for their engaging content, top-notch speakers, and flexible delivery options. Choose us for impactful learning experiences.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Connecting Success
                        </div>
                        <div className="collapse-content">
                            <p>Our career fairs bridge the gap between talent and opportunities. We excel in logistics, networking, and creating inclusive environments. Choose us for career-defining events.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow mb-4 bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Elevate Education
                        </div>
                        <div className="collapse-content">
                            <p>Elevate your educational conferences with us. Our expertise in content curation, logistics, and promotion ensures memorable and intellectually stimulating experiences.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Tailored Growth
                        </div>
                        <div className="collapse-content">
                            <p>Choose us for customized training programs that drive real results. We tailor training to your needs, fostering skill development and organizational success.</p>
                        </div>
                    </div>
                </div>
                <div className='ml-10'>
                    <img className='w-10/12 mb-3' src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;