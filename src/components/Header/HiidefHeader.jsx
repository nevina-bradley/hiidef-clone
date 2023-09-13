import React from 'react';
import Logo from '../../assets/electric-hiidef-logo.webp';
import Cart from '../../assets/Shopping-Cart-HD.webp';

const HiidefHeader = () => {
    return (
        <div>
            <img src={Logo} width='150px' height='88px' align='left' class="header" />
            <img src={Cart} width='30px' height='23px' align='right' class="header" />
        </div>
    );
};

export default HiidefHeader;