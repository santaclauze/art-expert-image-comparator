import styled from 'styled-components';
import tw from "twin.macro";


export const Container = styled.div`
  ${tw`flex flex-col h-full ml-auto flex-wrap content-start text-white`}
  width: 300px;
  background-color: #2f2f2f;
`;

export const ActionsGroup = styled.div`
  ${tw`flex flex-row content-start flex-wrap`}
`;


export const Button = styled.button<{ active?: boolean }>`
  width: fit-content;
  height: fit-content;
  background-color: ${props => props.active ? 'red' : 'blue'};
  ${tw`inline-block px-6 py-2 rounded-full text-xs font-medium leading-6 text-center text-white transition rounded hover:shadow-lg hover:bg-indigo-600`}
  ${({ active }) => active ?  tw`bg-indigo-900` : tw`bg-indigo-500`}
`;

export const Heading = styled.h3`
  ${tw`text-white`}
`;
