import styled from 'styled-components';

export const Container = styled.div<{ cursor: string }>`
  width: 75vw;
  height: 75vh;
  margin: auto;
  cursor: ${props => props.cursor};
`;