import React from 'react';

import classes from './Burger.css';
import BurgetIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgetIngredient type="bread-top"/>
            <BurgetIngredient type="cheese"/>
            <BurgetIngredient type="meat"/>
            <BurgetIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;