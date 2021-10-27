import React from 'react';
import Card from '@material-ui/core/Card';
import Divider  from '@material-ui/core/Divider';
import CardActions  from '@material-ui/core/CardActions';
import CardContent  from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


import './CustomCard.css';


const CustomCard = (props) => {
    return (
        <div className={props.setClassName}>
            <Card className="card">
                <CardActionArea className="card-action-area"> 
                    <CardContent className="card-content">
                        {props.children}
                    </CardContent>
                </CardActionArea>
                {props.footer && (
                    <div>
                        <Divider />
                        <CardActions className="card-footer">{props.footer}</CardActions>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default CustomCard;