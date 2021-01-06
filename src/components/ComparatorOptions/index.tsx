import React from 'react';
import { Container } from './styles';
import {ActionType, useReducerContext} from "../../reducers/toolsReducer";

const ComparatorOptions = () => {
    const { dispatch } = useReducerContext();

    const handleSliderY = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: 'sliderY' }})
    }

    const handleSliderX= () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: 'sliderX' }})
    }

    const handleReset = () => {
        dispatch({ type: ActionType.UPLOAD_IMAGES, payload: { images: [] }})
    }

    const handleSwap = () => {
        dispatch({ type: ActionType.SWAP_IMAGES });
    }
    return (
        <Container>
            <button onClick={handleSliderY}>SliderY</button>
            <button onClick={handleSliderX}>SliderX</button>
            <button onClick={handleReset}>ResetImages</button>
            <button onClick={handleSwap}>handle swap</button>
        </Container>
    );
};

export default ComparatorOptions;
