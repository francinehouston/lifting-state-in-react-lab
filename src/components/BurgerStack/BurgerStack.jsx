// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {

    return (
        <ul>
            {stack.map((ingredient, index) => {
                return (
                    <li key={index}
                        style={{
                            backgroundColor: ingredient.color,
                        }}

                    >
                        {ingredient.name}
                        <button onClick={() => removeFromBurger(index)}>

                            x
                        </button>
                    </li>
                )


            }
            )}


        </ul>
    )
};

export default BurgerStack;
