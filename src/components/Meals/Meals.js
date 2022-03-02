import React, {useState, useEffect} from 'react';
import { addToDb } from '../../utilities/fakeDb';
import Meal from '../Meal/Meal';
import Store from '../Store/Store';
import './Meals.css';

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, []);

    const handleMealName = meal => {
        const newName = [...mealName, meal];
        setMealName(newName);
        // save to local storage
        addToDb(meal.strMeal);
        console.log(addToDb(meal.strMeal));
    };
    
    return (
        <div className="meals-container">
            <div className="meal-container">
                {
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