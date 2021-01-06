// @ts-nocheck
import React, { useState } from 'react';
import { useSlider } from 'react-use';

import {
  Container, ContainerLower, ImagesContainer, ContainerCover, Slider, InitContainer,
} from './styles';
import ImageDisplayer from "./ImageDisplayer";

interface Props {
  imageLower: any;
  imageCover: any;
  isComparatorReady: boolean;
}

const ImageComparator = ({ imageCover, imageLower, isComparatorReady } : Props) => {
  const ref = React.useRef(null);
  const { value } = useSlider(ref);

  return (
      <ImagesContainer ref={ref}>
        <ContainerLower
            id="lower"
        >
          <ImageDisplayer previewUrl={imageLower} />
        </ContainerLower>
        <Slider pos={isComparatorReady ? value : 0.5} />
        <ContainerCover
            pos={isComparatorReady ? value : 1}
            id="cover"
        >
          <ImageDisplayer previewUrl={imageCover} />
        </ContainerCover>
      </ImagesContainer>
  );
}

export default ImageComparator;
