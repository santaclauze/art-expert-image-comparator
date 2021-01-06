// @ts-nocheck
import React, { useState } from 'react';
import { useSlider } from 'react-use';

import {
  Container, ContainerLower, ImagesContainer, ContainerCover, Slider, InitContainer,
} from './styles';
import ImageDisplayer from "./ImageDisplayer";
import {useReducerContext} from "../../../../reducers/toolsReducer";

const ImageComparator = () => {
    const { state: { images, isReadyToCompare, mode } } = useReducerContext();
    const ref = React.useRef(null);
    const isVertical = mode ===  'sliderX';
  const { value } = useSlider(ref, { vertical: isVertical });

  return (
      <ImagesContainer ref={ref}>
        <ContainerLower
            id="lower"
        >
          <ImageDisplayer previewUrl={images[0]} />
        </ContainerLower>
        <Slider pos={isReadyToCompare ? value : 0.5} isVertical={isVertical} />
        <ContainerCover
            pos={isReadyToCompare ? value : 1}
            isVertical={isVertical}
            id="cover"
        >
          <ImageDisplayer previewUrl={images[1]} />
        </ContainerCover>
      </ImagesContainer>
  );
}

export default ImageComparator;
