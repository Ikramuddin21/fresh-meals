import React from 'react';
import './Store.css';

const Store = ({ storeMeal }) => {
    console.log(storeMeal);

    // let count = 0;
    // storeMeal.forEach(meal => {
    //     console.log('meal store', meal);
    //     if (!meal.quantity) {
    //         meal.quantity = 1;
    //     }
    //     count = count + meal.quantity;
    // })
    
    const count = storeMeal.reduce((previous, meal) => previous + meal.quantity, 0);
    console.log(count);

    return (
        <div className="store">
            <h3>Order Items: {count}</h3>
            {
                storeMeal.map((selectedMeal, index) => <div className="display-store-meal"
                    key={index}>
                    <img src={selectedMeal.strMealThumb} alt="" />
                    <span>{selectedMeal.strMeal}</span>
                    <span className="quantity">{selectedMeal.quantity}</span>
                </div>)
            }
        </div>
    );
};

export default Store;