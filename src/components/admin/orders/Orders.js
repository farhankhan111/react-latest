import Layout from '../Layout';
import {useEffect, useState} from "react";
import axios from "axios";
const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {

        const response = await axios.get('http://example-app.test/api/orders');
        setOrders(response.data.data);

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  return (
      <div>
        <Layout heading='Orders'>
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"></h5>

                    <table className="table">
                      <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Departure</th>
                        <th scope="col">Return</th>
                        <th scope="col">Type</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Created At</th>
                      </tr>
                      </thead>
                      <tbody>
                      {orders && orders.map(order => (
                          <tr key={order.id}>
                            <th scope="row">1</th>
                            <td>{order.origin}</td>
                            <td>{order.destination}</td>
                            <td>{order.departure_date}</td>
                            <td>{order.return_date}</td>
                            <td>{order.type}</td>
                            <td>{order.stage}</td>
                            <td>{order.created_at}</td>
                          </tr>
                      ))}

                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
  );
}

export default Orders;