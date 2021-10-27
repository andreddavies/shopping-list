import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import ListItem from './ListItem/ListItem';
import ListFooter from './ListFooter/ListFooter';
import CustomCard from '../CustomCard/CustomCard';

import './List.css';

const List = () => {
    return (
            <CustomCard 
                setClassName="list-container" 
                footer={<ListFooter setFooterClassName="card-foo" />}
            >
                <div>
                    <h3 className="title">Mês</h3>
                    <div className="list-card-body">
                        <ListItem 
                            text="1 Item(s) Restante"
                            setItemIcon={faShoppingBasket}
                            setItemClassName="list-card-item"
                        />
                        <ListItem 
                            setItemIcon={faCheck}
                            text="2 Item(s) Comprados"
                            setItemClassName="list-card-item"
                        />
                    </div>
                </div>
            </CustomCard>
    );
};

export default List;