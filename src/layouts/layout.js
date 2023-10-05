import React from 'react';
import Header from '../layouts/header.js';
import Footer from '../layouts/footer.js';

const Layout = ({children}) => {
    return(
        <div>
            <Header />
            <main>{cildren}</main>
            <Footer />
        </div>
    )
};

export default Layout;