import Layout from '../Layout';
import {useState} from "react";
import axios from "axios";

const AddUser = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        active: false,
    });

    const handleChange = (e) => {
        const { name, type, checked } = e.target;
        const value = type === 'checkbox' ? checked : e.target.value;
        setFormData({...formData, [name]: value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://example-app.test/api/users',formData);

            if(response.status===201){

                alert('user added')
            }

        } catch (error) {

            //alert(error.response.status)
            // Handle network errors
            console.error(error);
        }

    };

    return (
        <div>
            <Layout>
                <section className="section">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add User</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" name="first_name" onChange={handleChange}
                                                   className="form-control"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-sm-2 col-form-label">Last Name</label>
                                            <input type="text" name="last_name" onChange={handleChange}
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="col-sm-2 col-form-label">Email</label>
                                            <input type="text" name="email" onChange={handleChange}
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="col-sm-2 col-form-label">Phone</label>
                                            <input type="text" name="phone" onChange={handleChange}
                                                   className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="col-sm-2 col-form-label">Password</label>
                                            <input type="text" name="password" onChange={handleChange}
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                       onChange={handleChange} name="active"/>
                                                <label className="form-check-label">Active</label>
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