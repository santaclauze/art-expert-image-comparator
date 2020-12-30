import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  & > div {
    img + img {
      object-position: 10px;
    }
  }
`;

// export const ImageContainer = styled.div<{ width?: number }>`
//   display: flex;
//   background-size: cover;
//   border: 1px solid red;
//   height: 300px;
//   width: ${props => props.width || 300}px;
//   background: url("/src/assets/test.jpg") repeat 0 0;
// `;

export const Dragger = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border: 3px solid red;
  cursor: ew-resize;
`;