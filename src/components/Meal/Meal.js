import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = ({meal, handleAddedMeal}) => {
    return (
        <div className="meal">
            <div>
                <img className="meal-image" src={meal.strMealThumb} alt="" />
            </div>

            <div className="meal-text">
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions.split(" ").slice(0, 45).join(" ")}</p>
                <button
                 className="add-btn"
                 onClick={ () => handleAddedMeal(meal)}
                ><FontAwesomeIcon icon={faPlus} /> Add</button>
            </div>
        </div>
    );
};

export default Meal;