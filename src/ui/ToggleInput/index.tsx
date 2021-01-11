import React from 'react';
import { Container, Label, InputContainer, Input, TogglePath, ToggleButton } from './styles';

interface Props {
    handleToggle: (arg: boolean) => void;
    isToggled: boolean;
}

const ToggleInput = ({ handleToggle, isToggled }: Props) => {

    const handleOnClick = () => {
        handleToggle(!isToggled);
    }

    return (
        <Container>
            <Label>Invisible slider</Label>
            <InputContainer>
                <Input id="toogleButton" type="checkbox" checked={isToggled} onClick={handleOnClick}  />
                <TogglePath />
                <ToggleButton isChecked={isToggled} />
            </InputContainer>
        </Container>
    );
};

export default ToggleInput;