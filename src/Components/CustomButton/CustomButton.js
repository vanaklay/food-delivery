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

export const IncrementButton = styled.div`
    width: 23px;
    ${({color}) => `color: ${(color)};`}
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    line-height: 23px;
    margin: 0px 10px;
    ${({color}) => `border: 1px solid ${(color)};`}
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