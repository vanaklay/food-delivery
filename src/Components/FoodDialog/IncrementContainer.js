import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { IncrementButton } from '../CustomButton/CustomButton';

const IncrementContainerStyled = styled.div`
    display: flex;
`;

const QuantityInputStyled = styled.input`
    font-size: 1rem;
    width: 1.5rem;
    text-align: center;
    border: none;
    outline: none;
`;

export const IncrementContainer = ({quantity}) => {
    const {value, setValue} = quantity;
    return (
        <IncrementContainerStyled>
            <IncrementButton color={pizzaRed} disabled={value === 1} onClick={() => setValue(value - 1)} > - </IncrementButton>
            <QuantityInputStyled {...quantity} />
            <IncrementButton color={pizzaRed} onClick={() => setValue(value + 1)} disabled={value === 10} > + </IncrementButton>
        </IncrementContainerStyled>
    );
}