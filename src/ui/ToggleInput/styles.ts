import styled from 'styled-components';
import tw from "twin.macro";

export const TogglePath = styled.div`
  ${tw`bg-gray-200 w-9 h-5 rounded-full shadow-inner`}
  transition: background 0.3s ease-in-out;
`;

export const ToggleButton = styled.div<{ isChecked: boolean }>`
  ${tw`absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0`}
  top: 0.2rem;
  left: 0.25rem;
  transition: all 0.3s ease-in-out;
  transform: translateX(${props => props.isChecked ? '100%' : '0%'});
`;

export const Container = styled.label`
  ${tw`flex items-center cursor-pointer`}
  input:checked ~ ${ToggleButton} {
    transform: translateX(100%);
  }

  input:checked ~ ${TogglePath} {
    background-color: dodgerblue;
  }
`;

export const Label = styled.div`
  ${tw`px-2`}
`;

export const InputContainer = styled.div`
  ${tw`relative`}
`;

export const Input = styled.input`
  ${tw`hidden`}

`;
