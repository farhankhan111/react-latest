import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Home from './components/front/Home';
import Orders from './components/admin/orders/Orders';
import Users from './components/admin/users/Users';
import AddUser from './components/admin/users/Add';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/create" element={<AddUser />} />

      </Routes>
    </Router>
  );
}

export default App;
