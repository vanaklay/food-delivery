import styled from 'styled-components';
import { IncrementContainer } from './IncrementContainer';

const IncrementSection = styled.div`
    display: flex;
    height: 1.5rem;
`;

export function QuantityInput({quantity}) {
    return <div>
            <IncrementSection>
                <div>Quantité : </div>
                <IncrementContainer quantity={quantity} />
            </IncrementSection>
        </div>
}