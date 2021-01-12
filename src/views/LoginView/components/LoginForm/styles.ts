import styled from 'styled-components';
import tw from "twin.macro";


export const Container = styled.div`
  ${tw`m-auto bg-white shadow-md rounded flex flex-col`}
`;

export const Form = styled.form`
  ${tw`m-auto bg-white shadow-md rounded px-4 pt-6 pb-8 flex flex-col`}
`;

export const Label = styled.label`
  ${tw`block text-gray-700 text-sm font-bold mb-1`}
`;

export const Input = styled.input`
  box-sizing: border-box;
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700`}
`;

export const FormInput = styled.div`
  ${tw`my-3`}
`;

export const ActionWrapper = styled.div`
  ${tw`flex mt-5`}
`;