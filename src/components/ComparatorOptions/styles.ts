import styled from 'styled-components';
import tw from "twin.macro";


export const Container = styled.div`
  ${tw`flex flex-row h-full ml-auto flex-wrap content-start`}
  width: 300px;
  background-color: #2f2f2f;
`;

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  ${tw`inline-block px-6 py-2 rounded-full text-xs font-medium leading-6 text-center text-white transition bg-indigo-500 rounded hover:shadow-lg hover:bg-indigo-600`}
`;
