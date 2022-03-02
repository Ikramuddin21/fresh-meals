import React from 'react';
import './Meal.css';

const Meal = ({meal}) => {
    console.log(meal);
    return (
        <div className="meal">
            <img className="meal-image" src={meal.strMealThumb} alt="" />
            <div>
                <h4>{meal.strMeal}</h4>
                <p>{meal.strInstructions.split(" ").slice(0, 50).join(" ")}</p>
            </div>
        </div>
    );
};

export default Meal;