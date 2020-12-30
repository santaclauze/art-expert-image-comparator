import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid grey;
  position: relative;
`;

export const ContainerCover = styled.div`
  overflow: hidden;
  width: 50%;
  height: 100%;
  position: absolute;
  img {
    width: 500px;
    height: 500px;
    display:block;
    vertical-align:middle;
  }
`;

export const ContainerLower = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    width: 500px;
    height: 500px;
    display:block;
    vertical-align:middle;
  }
`;