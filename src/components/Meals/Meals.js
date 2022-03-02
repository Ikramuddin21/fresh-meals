import React, {useState, useEffect} from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, []);

    return (
        <div className="meals-container">
            <div className="meal-container">
                {
                    meals.map(meal => <Meal 
                        key={meal.idMeal}
                        meal={meal} 
                    />)
                }
            </div>
            <div className="detail-container">
                <h4>Name: </h4>
            </div>
            
        </div>
    );
};

export default Meals;