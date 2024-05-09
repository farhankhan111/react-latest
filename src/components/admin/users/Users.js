import Layout from '../Layout';


const Orders = () => {
  return (
    <div>
      <Layout heading="Users">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"></h5>

                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Active</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>KHI</td>
                            <td>DXB</td>
                            <td>2016-05-25</td>
                            <td>2016-05-25</td>
                            <td>Expired</td>
                            <td>2016-05-25</td>
                          </tr>
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