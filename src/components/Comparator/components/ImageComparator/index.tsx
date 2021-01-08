// @ts-nocheck
import React, {useEffect, useState} from 'react';
import { useSlider } from 'react-use';

import {
    ContainerLower, ImagesContainer, ContainerCover, Slider,
} from './styles';
import ImageDisplayer from "./ImageDisplayer";
import {ActionType, useReducerContext} from "../../../../reducers/toolsReducer";

const ImageComparator = () => {
    const { dispatch, state: { images, isReadyToCompare, mode, scale } } = useReducerContext();
    const ref = React.useRef(null);
    const isVertical = mode ===  'sliderX';
    const { value } = useSlider(ref, { vertical: isVertical });
    const [savedSliderValue, setSavedSliderValue] = useState();

    const handleClick = () => {
      if(mode !== 'zoom') {
          return;
      }
      dispatch({ type: ActionType.INCREASE_ZOOM });
    };

    useEffect(() => {
      if(mode === 'zoom') {
          setSavedSliderValue(value)
      }
    }, [mode, value])

    const makePosition = (defaultValue: number) => {
      if (mode === 'zoom' || mode === 'drag') {
          return savedSliderValue;
      }
      if (isReadyToCompare) {
          return value;
      }
      return defaultValue;
    }

    return (
      <ImagesContainer ref={ref} onClick={handleClick}>
        <ContainerLower
            id="lower"
        >
          <ImageDisplayer previewUrl={images[0]} scale={scale} />
        </ContainerLower>
        <Slider pos={makePosition(0.5)} isVertical={isVertical} />
        <ContainerCover
            pos={makePosition(1)}
            isVertical={isVertical}
            id="cover"
        >
          <ImageDisplayer previewUrl={images[1]} scale={scale} />
        </ContainerCover>
      </ImagesContainer>
  );
}

export default ImageComparator;
