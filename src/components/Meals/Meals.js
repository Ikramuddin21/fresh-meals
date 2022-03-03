import React, { useState, useEffect } from 'react';
// import { addToDb } from '../../utilities/fakeDb';
import Meal from '../Meal/Meal';
import Store from '../Store/Store';
import './Meals.css';

const Meals = ({ searchMealName }) => {

    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setTimeout(setMeals(data.meals), 1000))
    }, []);

    // search result
    useEffect(() => {
        if (searchMealName) {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealName}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setMeals(data.meals))
        }
    }, [searchMealName]);

    const handleMealName = meal => {
        const newName = [...mealName, meal];
        setMealName(newName);
    };

    return (
        <div className="meals-container">
            <div className="meal-container">
                {
                    meals.length === 0 ? <h2>Loading...</h2> : 
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleMealName={handleMealName}
                    />)
                    
                }
            </div>

            <div className="store-container">
                <Store mealName={mealName} />
            </div>

        </div>
    );
};

export default Meals;