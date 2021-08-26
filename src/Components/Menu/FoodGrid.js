import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
    border-radius: 7px;
`;

export const Food = styled(Title)`
    padding: 1rem;
    color: ${pizzaRed};
    height: 100px;
    background-image: ${({imageUrl}) => `url(${imageUrl});`}
    background-position: center;
    background-size: cover;
    border-radius: 7px;
    text-shadow: 1px 1px 4px #380502;
    box-shadow: 0px 0px 10px 0px grey;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;
