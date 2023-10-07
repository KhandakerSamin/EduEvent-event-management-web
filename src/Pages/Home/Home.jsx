import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import ServiceCard from "../../Components/ServicesSection/ServiceCard";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import AboutUs from "../../Components/AbouUs/AboutUs";
import Footer from "../../Components/Footer/Footer";


const Home = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div>
            <Banner></Banner>
            <h1 className="font-bold text-5xl text-[#562EFE] mt-16 mb-10">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {
                    categories.map(category => <ServiceCard
                        key={category.id}
                        categories={category}
                    ></ServiceCard>)
                }
            </div>
            <div className="w-2/3">
                <WhyChoose></WhyChoose>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <footer className="mb-16 w-full">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;