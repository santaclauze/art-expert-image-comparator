import styled from 'styled-components';

export const Container = styled.div`
  width: 75vw;
  height: 75vh;
  border: 1px solid grey;
  position: relative;
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
`;

export const ContainerLower = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
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
`;