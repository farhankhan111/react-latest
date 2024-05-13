import airlineLogo from '../../../src/assets/images/thaiAir.jpg';
const Ticket = ({ order,ticket }) => {

    return (
        <div className="col-12 col-md-6 col-xl-11 mb-3">
            <div
                className="p-3 d-flex flex-row border theme-box-shadow theme-bg-white theme-border-radius cardeffect">
                <div className="flex-grow-1">
                    <h6 className="fw-bold">{order.origin.country_name} {order.origin_code}<i className="bi bi-arrow-end mx-2"></i>{order.destination.country_name} {order.destination_code}
                    </h6>
                    {order.return_date
                        ? (<p className="mb-3">{order.departure_date} - {order.return_date}</p>)
                        : (<p className="mb-3">{order.departure_date}</p>)
                    }

                    <div className="float-start">
                        <img src={airlineLogo} className="img-fluid theme-border-radius"
                             alt="Indigo" title="airline Indigo"/>
                        <p style={{marginLeft: 0.3 + 'em', fontWeight: 600}}
                           className="font-small d-inline-flex mb-0 align-middle lh-1">IndiGo -
                            {order.type}<br/>{order.class} </p>
                    </div>
                    <div className="float-end">
                        <span className="float-end h5 fw-bold theme-text-secondary">
                            <i className="bi bi-currency-dollar"></i> {ticket.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket

