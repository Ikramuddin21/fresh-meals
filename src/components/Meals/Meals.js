import React, { useState, useEffect } from 'react';
import { addToDb, getDb } from '../../utilities/fakeDb';
import Meal from '../Meal/Meal';
import Store from '../Store/Store';
import './Meals.css';

const Meals = ({ searchMealName }) => {

    const [meals, setMeals] = useState([]);
    const [storeMeal, setStoreMeal] = useState([]);
    // const [searchMeals, setSearchMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => {
                setTimeout(setMeals(data.meals), 1000);
                // setSearchMeals(data.meals);
            })
    }, []);

    // search result
    useEffect(() => {
        if (searchMealName) {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealName}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setMeals(data.meals)
                })
        }
    }, [searchMealName]);

    // get meal id from local storage
    useEffect(() => {
        if (meals.length) {
            const savedMeal = getDb();
            const storedMeal = [];
            for (const key in savedMeal) {
                const addedMeal = meals.find(meal => meal.idMeal === key);
                if (addedMeal) {
                    const quantity = savedMeal[key];
                    addedMeal.quantity = quantity;
                }
                storedMeal.push(addedMeal);
            }
            setStoreMeal(storedMeal);
        }
    }, [meals]);

    // add button implementation
    const handleAddedMeal = meal => {
        if (!meal.quantity) {
            meal.quantity = 1;
        }
        else {
            meal.quantity = meal.quantity + 1
        }
        const newName = [...storeMeal, meal];
        setStoreMeal(newName);
        console.log(meal);

        // save to local storage
        addToDb(meal.idMeal);

    };

    return (
        <div className="meals-container">
            <div className="meal-container">
                {
                    meals.length === 0 ? <h2>Loading...</h2> :
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddedMeal={handleAddedMeal}
                        />)

                }
            </div>

            <div className="store-container">
                <Store storeMeal={storeMeal} />
            </div>

        </div>
    );
};

export default Meals;