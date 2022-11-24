import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss'
import { Menu } from '../../../Components/shared/MainMenu/Menu'

export const Carrito = () => {
  return (
    <div className={styles.home}>
      <Menu active='item-3' />   
      <Cart />
      <Products />
    </div>
    
  );
};


