import {useEffect, useState} from "react";
import axios from "axios";
import Filter from './Filter';
import Ticket from "./Ticket";
import {useLocation, useNavigate} from "react-router-dom";

const Offers = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [order, setOrder] = useState([]);

    const [filters, setFilters] = useState({
        price: [50,90],
        stops: parseInt(queryParams.get('stops')) || '',
    });
    const handlePriceChange = (e) => {
        //const { name, type, checked } = e.target;
        //const value = type === 'checkbox' ? checked : e.target.value;
        //setPrice(e.target.value);
    };

    const handleRadioChange = (e) => {
        setFilters({ ...filters, stops: parseInt(e.target.value) });
    };

    const handleFilter = () => {

        const params= new URLSearchParams();
        for (const key in filters) {
            //if (Array.isArray(filters[key])) {
             //   params.append(key, JSON.stringify(filters[key]));
           // } else if (filters[key] !== '') {

           // }

            if (filters[key] !== '') {
                params.append(key, filters[key]);
            }
        }

        navigate(`${window.location.pathname}?${params.toString()}`);

        fetchTickets();

    }

    const filteredFilters = () => {

        const filteredFilters = {};
        for (const key in filters) {
            if (filters[key] !== '') {
                filteredFilters[key] = filters[key];
            }
        }

        return filteredFilters

    }

    const fetchTickets = async () => {

        try {
            const response = await axios.get('tickets', {
                params: filteredFilters()
            });
            setOrder(response.data.data);

        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {

        fetchTickets();

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

                        <div className="col-12 col-md-6 col-xl-4 mb-3">

                            <label htmlFor="customRange2" className="form-label">Price</label>
                            <input onChange={handlePriceChange} name="price" type="range" className="form-range"
                                   min="10" max="150" id="customRange2"/>

                            <div>
                                <input type="radio" id="stops0" value="0" checked={filters.stops === 0}
                                       onChange={handleRadioChange}/>
                                <label htmlFor="stops0">0 Stops</label>
                            </div>
                            <div>
                                <input type="radio" id="stops1" value="1" checked={filters.stops === 1}
                                       onChange={handleRadioChange}/>
                                <label htmlFor="stops1">1 Stop</label>
                            </div>
                            <div>
                                <input type="radio" id="stops2" value="2" checked={filters.stops === 2}
                                       onChange={handleRadioChange}/>
                                <label htmlFor="stops2">2 Stops</label>
                            </div>
                            <button onClick={handleFilter} className="btn btn-primary btn-sm" type="button">Apply
                            </button>

                        </div>

                        <div className="col-12 col-md-6 col-xl-8 mb-3">
                            {order && order.tickets && order.tickets.map((ticket, index) => (
                                <Ticket key={index} order={order} ticket={ticket}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Offers;