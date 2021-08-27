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

const ChoiceRadio = ({title, arrayChoice, useChoice, name}) => {
    return (
        <>
            <h3>{title}</h3>
            <ChoiceGrid>
                {arrayChoice.map(choice => (
                    <SelectedZone>
                        <RadioInput 
                            type="radio"
                            id={choice}
                            name={name}
                            value={choice}
                            checked={useChoice.value === choice}
                            onChange={useChoice.onChange}
                            />
                        <Label>{choice}</Label>
                    </SelectedZone>
                    ))}
            </ChoiceGrid>
        </>
    );
}

export const ComboMenu = ({openFood, choiceStarter, choiceBob1, choiceBob2, choiceDrink}) => {
    return (
        <>
            <h3>Composes ton combo : </h3>
            <ChoiceRadio
                title="Ton starter ?"
                arrayChoice={openFood.combo.starters}
                useChoice={choiceStarter}
                name="starter"
            />
            <ChoiceRadio
                title="Ton premier bOb ?"
                arrayChoice={openFood.combo.bobs}
                useChoice={choiceBob1}
                name="bob1"
            />
            <ChoiceRadio
                title="Ton second bOb ?"
                arrayChoice={openFood.combo.bobs}
                useChoice={choiceBob2}
                name="bob2"
            />
            <ChoiceRadio
                title="Ta boisson ?"
                arrayChoice={openFood.combo.drinks}
                useChoice={choiceDrink}
                name="drink"
            />
        </>
    );
}

export const ComboSecondMenu = ({openFood, choiceBob1, choiceDrink, choiceBol}) => {
    return (
        <>
            <h3>Composes ton combo : </h3>
            <ChoiceRadio
                title="Ton bOb ?"
                arrayChoice={openFood.combo.bobs}
                useChoice={choiceBob1}
                name="bob"
            />
            <ChoiceRadio
                title="Ton bol ?"
                arrayChoice={openFood.combo.bols}
                useChoice={choiceBol}
                name="bol"
            />
            <ChoiceRadio
                title="Ta boisson ?"
                arrayChoice={openFood.combo.drinks}
                useChoice={choiceDrink}
                name="drink"
            />
        </>
    );
}