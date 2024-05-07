import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
      <div>
          <Header/>
          <Sidebar/>

          <main id="main" className="main">

              <div className="pagetitle">
                  <h1>Orders</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                          <li className="breadcrumb-item">Orders</li>
                      </ol>
                  </nav>
              </div>
              {children}

          </main>

      </div>
);
}

export default Layout;
