import styled from 'styled-components';

export const CustomButton = styled.div`
    margin: 1rem;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    ${({color}) => `background-color: ${(color)};`}
`;