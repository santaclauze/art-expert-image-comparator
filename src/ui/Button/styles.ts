import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button<{ active?: boolean }>`
  width: fit-content;
  height: fit-content;
  background-color: ${props => props.active ? 'red' : 'blue'};
  ${tw`inline-block px-5 py-1 rounded-full text-xs font-medium leading-6 text-center text-white transition rounded hover:shadow-lg hover:bg-indigo-600`}
  ${({ active }) => active ?  tw`bg-indigo-900` : tw`bg-indigo-500`}
`;