import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../CustomCard/CustomCard.tsx';
import CardListItem from './CardsListItem/CardsListItem.tsx';
import CardListFooter from './CardsListFooter/CardsListFooter';

import './CardsList.css';

const CardsList = () => {
    return (
            <CustomCard 
                setClassName="card-list-container" 
                footer={<CardListFooter setFooterClassName="card-foo" />}
            >
                <div>
                    <h3 className="title">Mês</h3>
                    <div className="card-list-card-body">
                        <CardListItem 
                            text="1 Item(s) Restante"
                            setItemIcon={faShoppingBasket}
                            setItemClassName="card-list-card-item"
                        />
                        <CardListItem 
                            setItemIcon={faCheck}
                            text="2 Item(s) Comprados"
                            setItemClassName="card-list-card-item"
                        />
                    </div>
                </div>
            </CustomCard>
    );
};

export default CardsList;