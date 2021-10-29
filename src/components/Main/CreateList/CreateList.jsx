import React from 'react';

import CustomCard from '../CustomCard/CustomCard.tsx';

import './CreateList.css';

const CreateList = () => {
    return (
        <CustomCard setClassName="create-list-container">
            <div>
                <h2 className="title">Adicionar Nova Lista</h2>
            </div>
        </CustomCard>
    );
};

export default CreateList;