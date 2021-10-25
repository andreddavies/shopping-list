import './Header.css';
import React from 'react';
import { AppBar } from '@material-ui/core';

const Header = props => {
    return (
        <div>
            <AppBar position="static" color="primary">
                <div className="header">
                    <h2 className="title">Lista de Compras</h2>
                </div>
            </AppBar>
        </div>
    );
};

export default Header;