import {useEffect, useState} from "react";
import axios from "axios";
import Filter from './Filter';
import Offer from "./Offer";

const Offers = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {

                const response = await axios.get('offers');
                setOrder(response.data.data);

            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOffers();
    }, []);
    return (
        <div>
            <section className="travel-deal py-5 border-top" id="travelDeals">
                <div className="container">
                    <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
                        <div className="col-12">
                            <h3 className="h3 text-center theme-text-secondary fw-bold mb-3">Amazing travel
                                deals &amp; More
                            </h3>
                            <p className="text-center theme-text-accent-two mb-0">Explore the best of travel with our
                                exclusive deals for </p>
                        </div>
                    </div>
                    <div className="row aos-init aos-animate" data-aos="fade-down">

                        <div className="col-12 col-md-6 col-xl-4 mb-3">filters</div>

                        <div className="col-12 col-md-6 col-xl-8 mb-3">
                            {order && order.trips && order.trips.map((offer, index) => (
                                <Offer key={index} order={order} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offers;