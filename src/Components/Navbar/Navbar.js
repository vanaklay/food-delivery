import styled from 'styled-components';
import {pizzaRed} from '../../Styles/colors';
import {Title} from '../../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 1rem;
    height: 50px;
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 999;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
`;

export function Navbar() {
    return <NavbarStyled>
        <Logo>
            BaoBunz
        </Logo>
    </NavbarStyled>
}