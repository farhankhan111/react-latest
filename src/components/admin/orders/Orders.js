import Layout from '../Layout';
import {useEffect, useState} from "react";
import axios from "axios";
const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {

        // const response = await axios.get('https://your-laravel-api.com/orders');

        const data = [
          { id: 1, origin: 'New York', destination: 'Los Angeles', type: 'Express' },
          { id: 2, origin: 'Chicago', destination: 'Houston', type: 'Standard' },
          { id: 3, origin: 'Miami', destination: 'Seattle', type: 'Express' },
          { id: 4, origin: 'Boston', destination: 'San Francisco', type: 'Standard' },
          { id: 5, origin: 'Atlanta', destination: 'Denver', type: 'Express' },
          // Add more fake data as needed
        ];

        setOrders(data);

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  return (
      <div>
        <Layout>
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
                      {orders.map(order => (
                          <tr key={order.id}>
                            <th scope="row">1</th>
                            <td>{order.origin}</td>
                            <td>{order.destination}</td>
                            <td>{order.departure_date}</td>
                            <td>{order.return_date}</td>
                            <td></td>
                            <td>{order.stage}</td>
                            <td>{order.created_at}</td>
                          </tr>
                      ))}
                      {/*<tr>
                            <th scope="row">1</th>
                            <td>KHI</td>
                            <td>DXB</td>
                            <td>2016-05-25</td>
                            <td>2016-05-25</td>
                            <td>Expired</td>
                            <td>2016-05-25</td>
                          </tr>*/}
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