import React from "react";
import "../../Style.css";

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
  className?: string;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div onClick={props.onClick} className={`block ${props.className}`}>
      {props.value}
    </div>
  );
};

export default Block;
