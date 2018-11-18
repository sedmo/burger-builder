import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)//need to convert obj of kv pairs to array of components
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, indx) =>{
            return <BurgerIngredient key={igKey+indx} type={igKey} />
        });
    })
    .reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);//checks to see if we have an empty burger

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Let's add some ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;
