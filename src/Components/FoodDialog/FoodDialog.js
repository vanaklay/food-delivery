import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';

const Dialog = styled.div`
    width: 500px;
    height: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    left: 50px;
    right: 50px;
    z-index: 10;
    margin-left: auto;
    margin-right: auto;
    max-height: calc(100% - 100px);
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

export function FoodDialog({openFood, setOpenFood}) {
    const close = () => {
        setOpenFood();
    }
    if (!openFood) return null;
    return <>
        <DialogShadow onClick={close} />
        <Dialog>
            <DialogBanner imageUrl={openFood.imageUrl}>
                <DialogBannerName>
                    {openFood.name}
                </DialogBannerName>
            </DialogBanner>
        </Dialog>
    </>
}