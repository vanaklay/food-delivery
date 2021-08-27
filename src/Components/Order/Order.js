import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { CustomButton } from '../CustomButton/CustomButton';
import { formatPrice, getOrderPrice, getSubTotalPrice, isCombo, isPlan } from '../../Data/FoodData';

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

const OrderTitle = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid grey;
`;

const DetailsContainer = styled.div`
    overflow: auto;
`;

const OrderItem = styled.div`
    padding: 1rem 0;
`;

const OrderItemRow = styled.div`
    display: grid;
    grid-template-columns: 10% 50% 20% 10% 10%;
    justify-content: space-between;
`;

const OrderToppingsRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 12px;
    color: grey;
    padding: 0 2rem;
`;

const DetailOrderRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const TrashItem = styled.div`
    color: red;
    cursor: pointer;
`;

const EditItem = styled.div`
    color: green;
    cursor: pointer;
`;

const OrderFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const SubTotal = styled.div`
    width: 100%;
`;

const SubTotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

export function Order({orders, setOrders, setOpenFood}) {
    const subtotal = getSubTotalPrice(orders);

    const deleteItem = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return <OrderStyled>
        { orders.length === 0 ? (
            <OrderContent>Votre panier est vide</OrderContent>
         ) : (
             <>
                <OrderContent>
                    <OrderTitle>Votre Commande :</OrderTitle>
                    <DetailsContainer>
                        {orders.map((order, index) => (
                            <OrderItem key={`${Math.random() + 9}-o-${order.name}`} >
                                <OrderItemRow>
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div>{formatPrice(getOrderPrice(order))}</div>
                                    <EditItem onClick={() => {
                                        setOpenFood({...order, index});
                                    }}>&#9999;</EditItem>
                                    <TrashItem onClick={() => deleteItem(index)}>&#8855;</TrashItem>
                                </OrderItemRow>
                                {(isCombo(order) && order.comboChoice) && 
                                    (<OrderToppingsRow>
                                        {order.comboChoice?.map((item, index) => (<span key={`${item}-${index}-${Math.random() + 9}`}>{item}</span>))}
                                    </OrderToppingsRow>)
                                }
                                {isPlan(order) && 
                                    <OrderToppingsRow>
                                        {order.bobSelected
                                            .filter(bob => bob.quantity >= 1)
                                            .map((bob, index) => (
                                                <DetailOrderRow key={`${index}-${bob}-${Math.random() + 9}`}>
                                                    <span>{bob.name}</span>
                                                    <span> X {bob.quantity}</span> 
                                                </DetailOrderRow>
                                                ))
                                        }
                                    </OrderToppingsRow>
                                }
                                {order.choice && 
                                    <OrderToppingsRow>
                                        {order.choice}
                                    </OrderToppingsRow>
                                }
                            </OrderItem>
                        ))}
                    </DetailsContainer>
                </OrderContent>
                <OrderFooter>
                    <SubTotal>
                        <SubTotalRow>
                            <span>
                                Total : 
                            </span>
                            <span>
                                {formatPrice(subtotal)}
                            </span>
                        </SubTotalRow>
                    </SubTotal>
                    <CustomButton onClick={() => console.log('bouton clické...')} color={pizzaRed} >Voir le panier</CustomButton>
                </OrderFooter>
            </>
         )}
        
    </OrderStyled>
}