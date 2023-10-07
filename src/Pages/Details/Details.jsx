import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();

    const [info, setInfo] = useState({});

    const details = useLoaderData();
    console.log(details);

    useEffect(() => {
        const d = details?.find( (item) => item.id == id )
        console.log(d);
        setInfo(d);
    }, [details]);

    console.log(info);
    

    return (
        <section className="w-full">
            <div className="w-full">
                <img className="w-full h-[500px]" src={info.image} alt="" />
            <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl text-black my-5">{info.title}</h1>
            <h3 className="font-bold text-4xl text-blue-700 "><span className="text-4xl font-semibold text-black">Booking fee: </span>${info.price}</h3>
            </div>
            <p>{info.long_description}</p>
            </div>
            <div className="my-10">
                <button className="btn btn-primary px-5">Confirm Booking</button>
            </div>
        </section>
    );
};

export default Details;