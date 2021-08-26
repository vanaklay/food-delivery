import styled from 'styled-components';
import { foods } from '../../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
    margin: 0px 400px 50px 20px;
`;

export function Menu() {
    return <MenuStyled>
        {Object.entries(foods).map(([category, foods]) => (
            <>
            <h2>{category}</h2>
            <FoodGrid>
                {foods.map(food => (
                    <Food imageUrl={food.imageUrl} key={`${food.name}-${Math.random() + 9}`}>
                        <FoodLabel>
                            {food.name}
                        </FoodLabel>
                    </Food>
                ))}
            </FoodGrid>
            </>
        ))}
    </MenuStyled>;
}