import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import "./CustomCard.css";

type TProps = {
  setClassName: string;
  footer?: React.ReactElement;
  children: React.ReactElement;
};

const CustomCard = ({
  setClassName,
  footer,
  children,
}: TProps): React.ReactElement => {
  return (
    <div className={setClassName}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          <CardContent className="card-content">{children}</CardContent>
        </CardActionArea>
        {footer && (
          <div>
            <Divider />
            <CardActions className="card-footer">{footer}</CardActions>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CustomCard;
