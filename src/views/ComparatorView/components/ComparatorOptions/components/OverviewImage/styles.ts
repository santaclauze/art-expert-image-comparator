import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`relative hidden`}
`;

export const Overview = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`;

export const Viewer = styled.div`
  ${tw`absolute`}
  top: 0;
  left: 0;
  height: 200px;
  width: 200px;
  background: rgba(0, 0, 0, 0.5);
  filter: grayscale(100%);
`;

