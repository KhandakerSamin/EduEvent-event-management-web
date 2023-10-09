import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const Details = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const details = useLoaderData();

    useEffect(() => {
        const d = details?.find(item => item.id == id);
        setInfo(d);
    }, [details, id]);

    const handleConfirm = () => {
        swal("Booking Confirmed!", "Thanks For Booking Us!", "success");
    }

    return (
        <section className="w-full p-4 md:p-8 lg:p-10">
            <div className="w-full">
                <img className="w-full h-auto md:h-[500px] lg:h-[600px]" src={info.image} alt="" />
                <div className="flex flex-col md:flex-row justify-between items-center my-5">
                    <h1 className="font-bold text-2xl md:text-4xl text-black mb-2 md:mb-0">{info.title}</h1>
                    <h3 className="font-bold text-2xl md:text-4xl text-blue-700"><span className="text-2xl font-semibold text-black">Booking fee: </span>${info.price}</h3>
                </div>
                <p className="text-sm md:text-base">{info.long_description}</p>
            </div>
            <div className="my-5 md:my-10">
                <button onClick={handleConfirm} className="btn normal-case font-bold text-base md:text-xl btn-primary px-3 md:px-5 py-2 md:py-3">Confirm Booking</button>
            </div>
        </section>
    );
};

export default Details;
