import React from 'react';
import HeadSec from '../components/HeadSec';
import FootSec from '../components/FootSec';

const Layout = ({ children }) => {
    return (
        <div>
            <HeadSec />
            <main>{children}</main>
            <FootSec  />
        </div>
    );
};

export default Layout;
