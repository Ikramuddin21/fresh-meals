import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Store.css';

const Store = ({ storeMeal, deleteMeal }) => {

    const count = storeMeal?.reduce((previous, meal) => previous + meal?.quantity, 0);

    return (
        <div className="store">
            <h3>Order Items: {count}</h3>
            {
                storeMeal?.map((selectedMeal, index) => <div className="display-store-meal"
                    key={index}>
                    <img src={selectedMeal?.strMealThumb} alt="" />
                    <span>
                        {selectedMeal?.strMeal}
                        <strong className="quantity">{selectedMeal?.quantity}</strong>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => deleteMeal(selectedMeal?.idMeal)}
                            className="delete-icon"
                        />
                    </span>
                </div>)
            }
        </div>
    );
};

export default Store;