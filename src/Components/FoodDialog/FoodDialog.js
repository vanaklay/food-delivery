import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../../Styles/colors';
import { CustomButton } from '../CustomButton/CustomButton';
import { formatPrice, getOrderPrice } from '../../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../../Hooks/useQuantity';

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 7rem;
    left: 10px;
    right: 10px;
    z-index: 10;
    margin-left: auto;
    margin-right: auto;
    max-height: calc(100% - 12rem);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1rem;
    min-height: 9rem;
    margin-bottom: 1rem;
    ${({imageUrl}) => `background-image: url(${imageUrl});`}
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
`;

const DialogContent = styled.div`
    overflow: auto;
    padding: 1rem;
`;

const DialogFooter = styled.div`
    box-shadow: 0px -2px 10px 0px grey;
    height: 60px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    padding: 1rem 0;
`;

function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const order = {
        name: openFood.name,
        price: openFood.price,
        quantity: quantity.value
    }
    
    const close = () => {
        setOpenFood();
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }
    return <>
        <DialogShadow onClick={close} />
        <Dialog>
            <DialogBanner imageUrl={openFood.imageUrl}>
                <DialogBannerName>
                    {openFood.name}
                </DialogBannerName>
            </DialogBanner>
            <DialogContent>
                Prix : {formatPrice(openFood.price)}
                <QuantityInput quantity={quantity} />
            </DialogContent>
            <DialogFooter>
                <CustomButton color='grey' onClick={close} >Annuler</CustomButton>
                <CustomButton color={pizzaRed} onClick={addToOrder} >Ajouter {formatPrice(getOrderPrice(order))}</CustomButton>
            </DialogFooter>
        </Dialog>
    </>
}

export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />;
}