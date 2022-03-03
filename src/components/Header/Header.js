import React, { useRef, useState } from 'react';
import './Header.css';

const Header = ({ setSearchMealName }) => {

    const [mealName, setMealName] = useState("");
    const formRef = useRef(null);
    
    const handleSubmit = e => {
        e.preventDefault();
        setSearchMealName(mealName);
        formRef.current.reset();
    };

    return (
        <div className="header">
            <div>
                <h1>Welcome to our fresh meals</h1>
                <p>You will find all kinds of safe and good meals here. So let us come here.</p>
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit}>
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search your meal"
                        onChange={(e) => setMealName(e.target.value)}
                    />
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;