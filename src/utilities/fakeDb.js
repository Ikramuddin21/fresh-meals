const addToDb = id => {
        const savedDb = getDb();
        if(savedDb[id]) {
                savedDb[id] = savedDb[id] + 1;
        }
        else {
                savedDb[id] = 1;
        }
        updateDb(savedDb);
};

const updateDb = id => {
        const idJSON = JSON.stringify(id);
        localStorage.setItem("mealsId", idJSON);
};

const getDb = () => {
        let savedDb = localStorage.getItem("mealsId");
        return savedDb ? JSON.parse(savedDb) : {};
};

export { addToDb, getDb };