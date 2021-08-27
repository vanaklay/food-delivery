import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { IncrementButton } from '../CustomButton/CustomButton';

const SelectedGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const BobSelection = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
`;

const IncrementContainerStyled = styled.div`
    display: flex;
`;

const QuantityInputStyled = styled.div`
    font-size: 1rem;
    width: 1.5rem;
    text-align: center;
`;

export const QuantityBob = ({items, incrementItem, decrementItem, limit, numberItemsSelected}) => {
    const isLimited = numberItemsSelected === limit;
    return (
        <>
            <h3>Composes ton plan : </h3>
            <SelectedGrid>
                {items.map((item, i) => (
                    <BobSelection key={`item-${item}-${i}`}>
                        <div>{item.name}</div>
                        <IncrementContainerStyled>
                            <IncrementButton color={pizzaRed} disabled={item.quantity === 0} onClick={() => decrementItem(i)} > - </IncrementButton>
                            <QuantityInputStyled>{item.quantity}</QuantityInputStyled>
                            <IncrementButton color={pizzaRed} onClick={() => incrementItem(i)} disabled={isLimited} > + </IncrementButton>
                        </IncrementContainerStyled>
                    </BobSelection>
                ))}
            </SelectedGrid>
        </>
    );
}
