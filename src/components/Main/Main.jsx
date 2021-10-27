import React from 'react';

import List from './List/List';
import CreateList from './CreateList/CreateList';

import './Main.css';


const Main = props => {
    return (
        <div className="page-container">
            <CreateList />
            <List />
        </div>
    );
};

export default Main;