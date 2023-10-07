
const WhyChoose = () => {
    return (
        <div >
            <h1 className="font-bold text-5xl text-[#562EFE] mt-16 mb-10">Why Choose us?</h1>
            <div className="collapse collapse-arrow mb-4 bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
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
    );
};

export default WhyChoose;