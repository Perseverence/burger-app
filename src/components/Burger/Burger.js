import React from 'react';
import {withRouter} from "react-router-dom";

import classes from './Burger.css';
import BurgetIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIgredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgetIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIgredients.length === 0 )
    {
        transformedIgredients = <p>Please start add ingredients!</p>
    }
    console.log(transformedIgredients);

    return (
        <div className={classes.Burger}>
            <BurgetIngredient type="bread-top"/>
            {transformedIgredients}
            <BurgetIngredient type="bread-bottom"/>
        </div>
    )
};

export default withRouter(burger);