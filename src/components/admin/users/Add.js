import Layout from '../Layout';

const AddUser = () => {
    return (
        <div>
            <Layout>
                <section className="section">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Add User</h5>
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label">Name</label>
                                                <input type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label">Email</label>
                                                <input type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label">Password</label>
                                                <input type="text" className="form-control" placeholder="Password"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail3"
                                                       className="col-sm-2 col-form-label">Phone</label>
                                                <input type="text" className="form-control" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Active
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="text-left">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            </Layout>
        </div>
    );
}

export default AddUser;