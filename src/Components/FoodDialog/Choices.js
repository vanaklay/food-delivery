import styled from 'styled-components';

const ChoiceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const SelectedZone = styled.div`
    display: flex;
    padding: 0 1rem;
`;

const RadioInput = styled.input`
    cursor: pointer;
`;

const Label = styled.label`
    cursor: pointer;
    margin-left: 1rem;
`;

export const Choices = ({openFood, choiceRadio}) => {
    return (
        <>
            <h3>Fais ton choix</h3>
            <ChoiceGrid>
                {openFood.choices.map((choice, index) => (
                    <SelectedZone key={`${index}-${Math.random() +1}-${choice}`}>
                        <RadioInput 
                            type="radio"
                            id={choice}
                            name="choice"
                            value={choice}
                            checked={choiceRadio.value === choice}
                            onChange={choiceRadio.onChange}
                        />
                        <Label for={choice}>{choice}</Label>
                    </SelectedZone>
                ))}
            </ChoiceGrid>
        </>
    )
}