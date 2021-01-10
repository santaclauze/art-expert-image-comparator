// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {useSlider} from 'react-use';

import {ContainerCover, ContainerLower, ImagesContainer, Slider,} from './styles';
import ImageDisplayer from "./ImageDisplayer";
import {ActionType, useReducerContext} from "../../../../reducers/toolsReducer";
import { Mode} from "../../../../types";

const ImageComparator = () => {
    const { dispatch, state: { images, isReadyToCompare, mode, sliderStyles } } = useReducerContext();
    const ref = React.useRef(null);

    const isVertical = mode === Mode.SLIDER_X;

    const { value } = useSlider(ref, { vertical: isVertical });
    const [savedSliderValue, setSavedSliderValue] = useState();
    const handleClick = () => {
      if(mode !== 'zoom') {
          return;
      }
      dispatch({ type: ActionType.INCREASE_ZOOM });
    };

    useEffect(() => {
      if(mode === 'zoom' || mode === 'drag') {
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
          <ImageDisplayer previewUrl={images[0]} index={1} />
        </ContainerLower>
        <Slider
            pos={makePosition(0.5)}
            isVertical={isVertical}
            color={sliderStyles.color}
            width={sliderStyles.width}
        />
        <ContainerCover
            pos={makePosition(1)}
            isVertical={isVertical}
            id="cover"
        >
          <ImageDisplayer previewUrl={images[1]} index={2} />
        </ContainerCover>
      </ImagesContainer>
  );
}

export default ImageComparator;
