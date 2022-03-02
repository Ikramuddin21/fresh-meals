let storedName = {};
const addToDb = name => {
    const exists = getDb();
    if(!exists) {
        storedName.mealName = name;
    }
    else {
        storedName = JSON.parse(exists);
    }
    updateDb(storedName);
};

const getDb = () => localStorage.getItem("mealsName");

const updateDb = name => localStorage.setItem("mealsName", JSON.stringify(name));

export { addToDb }