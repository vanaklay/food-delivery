import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { CustomButton } from '../CustomButton/CustomButton';

const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 82px;
    width: 340px;
    background-color: white;
    height: calc(100% - 82px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
    display: grid;
    grid-template-rows: 70% 30%;
`;

const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
`;

const OrderContainer = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
    padding: 1rem;
`;

const OrderFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`;

export function Order({orders}) {
    return <OrderStyled>
        { orders.length === 0 ? (
            <OrderContent>Votre panier est vide</OrderContent>
         ) : (
            <OrderContent>
                <OrderContainer>Votre Commande :</OrderContainer>
                {orders.map(order => (<OrderItem key={`${Math.random() + 9}-o-${order.name}`}>{order.name}</OrderItem>))}
            </OrderContent>
         )}
        <OrderFooter>
            <CustomButton onClick={() => console.log('bouton clické...')} color={pizzaRed} >Voir le panier</CustomButton>
        </OrderFooter>
    </OrderStyled>
}