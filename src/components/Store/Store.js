import React from 'react';
import './Store.css';

const Store = ({ mealName }) => {
    return (
        <div className="store">
            <h3>Added Mealname:</h3>
            <ol>
                {
                    mealName.map(selectedName => <li
                        key={selectedName.idMeal}
                    >{selectedName.strMeal}</li>)
                }
            </ol>
        </div>
    );
};

export default Store;