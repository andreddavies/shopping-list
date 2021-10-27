import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ListItem = (props) => {
    return (
        <div className={props.setItemClassName}>
            <FontAwesomeIcon icon={props.setItemIcon} size="sm" />
            <p>{props.text}</p>
        </div>
    );
};

export default ListItem;