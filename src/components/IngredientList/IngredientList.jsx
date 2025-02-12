// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
   

    return (
    <div>
        <ul>
     
            {ingredients.map((ingredient, index) =>(
              
                <li 
                key={index}
                    style={{
                        backgroundColor: ingredient.color,
                        padding: "5px",
                        margin: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignContent: "center"
                    }}
                    >
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}
                        style={{
                            marginLeft: "10px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}>
                        +
                    </button>
                </li>
            ) )}
        </ul>
    </div>
        );
};

export default IngredientList;
