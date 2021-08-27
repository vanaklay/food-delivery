import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';

const QuantityInputStyled = styled.input`
    font-size: 1rem;
    width: 1.5rem;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementContainer = styled.div`
    display: flex;
    height: 1.5rem;
`;

const IncrementButton = styled.div`
    width: 23px;
    color: ${pizzaRed};
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    line-height: 23px;
    margin: 0px 10px;
    border: 1px solid ${pizzaRed};
    border-radius: 50%;
    ${({ disabled }) => 
        disabled && 
        `opacity: 0.5;
            pointer-events: none;
            `}
    &:hover {
        background-color: #ffe3e3;
    }
`;

export function QuantityInput({quantity}) {
    const {value, setValue} = quantity;
    return <div>
            <IncrementContainer>
                <div>Quantité : </div>
                <IncrementButton disabled={value === 1} onClick={() => setValue(value - 1)} > - </IncrementButton>
                <QuantityInputStyled {...quantity} />
                <IncrementButton onClick={() => setValue(value + 1)} disabled={value === 10} > + </IncrementButton>
            </IncrementContainer>
        </div>
}