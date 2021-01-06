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

    const handleResetImages = () => {
        dispatch({ type: ActionType.UPLOAD_IMAGES, payload: { images: [] }})
    }

    const handleSwap = () => {
        dispatch({ type: ActionType.SWAP_IMAGES });
    }

    const handleZoom = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: 'zoom' } });
    }

    const handleResetSettings = () => {
        dispatch({ type: ActionType.RESET_IMAGES_SETTINGS });
    }

    return (
        <Container>
            <button onClick={handleSliderY}>SliderY</button>
            <button onClick={handleSliderX}>SliderX</button>
            <button onClick={handleZoom}>Zoom</button>
            <button onClick={handleResetImages}>Reset Images</button>
            <button onClick={handleResetSettings}>Reset Settings</button>
            <button onClick={handleSwap}>handle swap</button>
        </Container>
    );
};

export default ComparatorOptions;
