import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const FoodCategory = ({category, foods, setOpenFood}) => {
    return <>
            <h2>{category}</h2>
            <FoodGrid>
                {foods.map(food => (
                    <Food imageUrl={food.imageUrl} key={`${food.name}-${Math.random() + 9}`} onClick={() => {
                        setOpenFood(food);
                    }}>
                        <FoodLabel>
                            {food.name}
                        </FoodLabel>
                    </Food>
                ))}
            </FoodGrid>
        </>
}

export default FoodCategory;

