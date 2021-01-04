import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
`;
export const ImagesContainer = styled.div`
  width: 75vw;
  height: 75vh;
  border: 1px solid grey;
  position: relative;
  background-color: #666666;
  display: flex;
  img {
    pointer-events: none;
    width: 75vw;
    height: 75vh;
    display:block;
    vertical-align:middle;
  }
`;

export const ContainerCover = styled.div.attrs<{pos: number }>(props => ({
    style: {
        width: `${props.pos * 100}%`,
    },
}))`
  overflow: hidden;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export const ContainerLower = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: 10;
`;

export const DropContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slider = styled.div.attrs<{pos: number }>(props => ({
    style: {
        left: `${props.pos * 100}%`,
    },
}))`
  height: 100%;
  width: 1px;
  position: absolute;
  top: 0;
  background-color: red;
  z-index: 100;
`;

export const InitContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: purple;
  z-index: 90;
`;
