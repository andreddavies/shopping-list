import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TProps = {
  text: string;
  setItemIcon: IconProp;
  setItemClassName: string;
};

const CardListItem = ({
  text,
  setItemIcon,
  setItemClassName,
}: TProps): React.ReactElement => {
  return (
    <div className={setItemClassName}>
      <FontAwesomeIcon icon={setItemIcon} size="sm" />
      <p>{text}</p>
    </div>
  );
};

export default CardListItem;
