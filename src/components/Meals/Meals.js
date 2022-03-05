import React, { useState, useEffect } from 'react';
import { addToDb, getToDb, removeToDb } from '../../utilities/fakeDb';
import Meal from '../Meal/Meal';
import Store from '../Store/Store';
import './Meals.css';

const Meals = ({ searchMealName }) => {

    const [meals, setMeals] = useState([]);
    const [storeMeal, setStoreMeal] = useState([]);
    const [searchMeals, setSearchMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setSearchMeals(data.meals);
            })
    }, []);

    // search result
    useEffect(() => {
        if (searchMealName) {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealName}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setSearchMeals(data.meals);
                })
        }
    }, [searchMealName]);

    // get meal id from local storage
    useEffect(() => {
        if (meals.length) {
            const savedMeal = getToDb();
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

    // click add button set state & save local storage
    const handleAddedMeal = meal => {
        if (!meal.quantity) {
            meal.quantity = 1;
        }
        else {
            meal.quantity = meal.quantity + 1;
        }

        const duplicateMeal = storeMeal?.filter(commonMeal => commonMeal?.idMeal !== meal.idMeal);
        const newMeal = [meal, ...duplicateMeal];
        setStoreMeal(newMeal);

        // save to local storage
        addToDb(meal.idMeal);
    };

    // delete from local storage & display
    const deleteMeal = mealId => {

        // remove from local storage
        removeToDb(mealId);

        const matchDeleteMeal = storeMeal?.filter(meal => meal?.idMeal !== mealId);
        setStoreMeal(matchDeleteMeal);
    };
    
    return (
        <div className="meals-container">
            <div className="meal-container">
                {
                    searchMeals.length === 0 ? <h2>Loading...</h2> :
                        searchMeals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddedMeal={handleAddedMeal}
                        />)
                }
            </div>

            <div className="store-container">
                <Store 
                    storeMeal={storeMeal}
                    deleteMeal={deleteMeal}
                />
            </div>
        </div>
    );
};

export default Meals;