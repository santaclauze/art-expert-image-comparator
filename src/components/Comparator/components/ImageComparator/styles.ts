import styled from 'styled-components';

export const ImagesContainer = styled.div`
  width: 75vw;
  height: 75vh;
  position: relative;
  display: flex;
  div#displayed-image-1, div#displayed-image-2 {
    width: 75vw;
    height: 75vh;
    display:block;
    vertical-align:middle;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const ContainerCover = styled.div.attrs<{pos: number, isVertical: boolean }>(props => ({
    style: {
        ...props.isVertical ? { height: `${props.pos * 100}%` } : { width: `${props.pos * 100}%` },
    },
}))`
  overflow: hidden;
  height: 100%;
  width: 100%;
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

export const Slider = styled.div.attrs<{pos: number, isVertical: boolean, color: string; width: string }>(props => ({
    style: {
        ...props.isVertical ? {
            top: `${props.pos * 100}%`,
            width: '100%',
            left: 0,
            height: `${props.width}px`,
        } : {
            left: `${props.pos * 100}%`,
            height: '100%',
            top: 0,
            width: `${props.width}px`,
        },
    },
}))`
  position: absolute;
  z-index: 100;
  /* @ts-ignore */
  color: ${props => props.color};
`;
