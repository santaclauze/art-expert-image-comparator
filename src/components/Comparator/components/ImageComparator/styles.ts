import styled from 'styled-components';

export const ImagesContainer = styled.div`
  width: 75vw;
  height: 75vh;
  border: 1px solid grey;
  position: relative;
  background-color: #666666;
  display: flex;
  div.displayed-image {
    width: 75vw;
    height: 75vh;
    display:block;
    vertical-align:middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

export const ContainerCover = styled.div.attrs<{pos: number, isVertical: boolean }>(props => ({
    style: {
        ...props.isVertical ? { height: `${props.pos * 100}%` } : { width: `${props.pos * 100}%` },
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

export const Slider = styled.div.attrs<{pos: number, isVertical: boolean }>(props => ({
    style: {
        ...props.isVertical ? {
            top: `${props.pos * 100}%`,
            width: '100%',
            left: 0,
            height: '1px',
        } : {
            left: `${props.pos * 100}%`,
            height: '100%',
            top: 0,
            width: '1px',
        },
    },
}))`
  position: absolute;
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
