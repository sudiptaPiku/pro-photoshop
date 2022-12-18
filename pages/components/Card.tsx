import React from "react";
import styles from '../../styles/Home.module.css'

export interface CardProps{
    onClick?: () => void;
}
const Card: React.FC<React.PropsWithChildren<CardProps>> = ({children,onClick}) => {
  return (
    <div
    className={styles.card}
    onClick={onClick}
    >
      {children}
    </div>
  );
}
export default Card;