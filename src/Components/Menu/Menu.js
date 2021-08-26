import styled from 'styled-components';
import { foods } from '../../Data/FoodData';
import FoodCategory from './FoodCategory';

const MenuStyled = styled.div`
    margin: 0px 400px 50px 20px;
`;

export function Menu({setOpenFood}) {
    return <MenuStyled>
        {Object.entries(foods).map(([category, foods]) => (
            <FoodCategory key={`${Math.random() + 2}-a-${category}`} category={category} foods={foods} setOpenFood={setOpenFood} />
        ))}
    </MenuStyled>;
}