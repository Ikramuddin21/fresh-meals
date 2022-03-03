import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {

  const [searchMealName, setSearchMealName] = useState("");

  return (
    <div>
      <Header setSearchMealName={setSearchMealName} />
      <Meals searchMealName={searchMealName} />
    </div>
  );
}

export default App;
