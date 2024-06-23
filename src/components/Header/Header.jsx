import React from 'react';
import "./header.css";

const Header = ({ totalMoney }) => {

    return (
        <div className={`totalmoney`}><a href="https://ardacanbakis.com" target="_blank">
            <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates"/></a>
            <h1>Spend Bill Gates' Money</h1>
            <span>${totalMoney}</span>
        </div>
    );
};

export default Header;
