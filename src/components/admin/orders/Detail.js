import Layout from '../Layout';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const {orderId} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const orderDetail = async () => {
            try {
                const response = await axios.get(`orders/${orderId}`);
                setData(response.data.data);
            } catch (error) {
                //setError(error);
                console.error('Error fetching order detail:', error);
            } finally {
                setLoading(false);
            }
        };

        orderDetail();
    }, [orderId]);

    return (
        <div>
            <Layout heading='Order Detail'>
                <section className="section">
                    {loading ? (<p>Loading...</p>) : (
                        data && (
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Chat Details</h5>
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <th scope="col">Phone</th>
                                                    <td scope="col">{data.phone}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Email</th>
                                                    <td scope="col">{data.contact?.email}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Preferred Time</th>
                                                    <td scope="col">Night</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Order Details</h5>
                                            <table className="table">
                                                <tbody>
                                                <tr>
                                                    <th scope="col">Order Id</th>
                                                    <td scope="col">{data.id}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Origin</th>
                                                    <td scope="col">{data.origin}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Destination</th>
                                                    <td scope="col">{data.destination}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Type</th>
                                                    <td scope="col">{data.type}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Departure Date</th>
                                                    <td scope="col">{data.departure_date}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Return Date</th>
                                                    <td scope="col">{data.return_date}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Stage</th>
                                                    <td scope="col">{data.stage}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Offers</h4>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">

                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse hide"
                                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="col">1</td>
                                                                <td scope="col"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Layout>
        </div>
    );
}

export default Detail;