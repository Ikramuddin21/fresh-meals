// save to local storage
const addToDb = id => {
        const savedDb = getToDb();
        if(savedDb[id]) {
                savedDb[id] = savedDb[id] + 1;
        }
        else {
                savedDb[id] = 1;
        }
        updateDb(savedDb);
};

// update local storage
const updateDb = id => {
        const idJSON = JSON.stringify(id);
        localStorage.setItem("mealsId", idJSON);
};

// get to local storage
const getToDb = () => {
        let savedDb = localStorage.getItem("mealsId");
        return savedDb ? JSON.parse(savedDb) : {};
};

// remove to local storage
const removeToDb = id => {
        const savedDb = getToDb();
        delete savedDb[id];
        updateDb(savedDb);
};

// clear all 
const clearAll = () => {
        localStorage.clear();
};



export { addToDb, getToDb, removeToDb, clearAll };