import React, {ChangeEvent} from 'react';
import {Container} from './styles';
import {ActionType, useReducerContext} from "../../reducers/toolsReducer";
import { Mode} from "../../types";

const ComparatorOptions = () => {
    const { dispatch, state: { mode , scaleValue } } = useReducerContext();

    const handleSliderY = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.SLIDER_Y }})
    }

    const handleSliderX= () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.SLIDER_X }})
    }

    const handleResetImages = () => {
        dispatch({ type: ActionType.UPLOAD_IMAGES, payload: { images: [] }})
    }

    const handleSwap = () => {
        dispatch({ type: ActionType.SWAP_IMAGES });
    }

    const handleZoom = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.ZOOM } });
    }

    const handleResetSettings = () => {
        dispatch({ type: ActionType.RESET_IMAGES_SETTINGS });
    }

    const handleDrag = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.DRAG } });
    }

    const handleZoomChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.SET_SCALE_VALUE, payload: { scaleValue: event.target.value } });
    }

    return (
        <Container>
            <button onClick={handleSliderY}>SliderY</button>
            <button onClick={handleSliderX}>SliderX</button>
            <button onClick={handleZoom}>Zoom</button>
            <button onClick={handleResetImages}>Reset Images</button>
            <button onClick={handleResetSettings}>Reset Settings</button>
            <button onClick={handleSwap}>handle swap</button>
            <button onClick={handleDrag}>handle drag</button>
            {mode === Mode.ZOOM &&
                <input
                    onChange={handleZoomChange}
                    type='range'
                    step='1'
                    min='1'
                    max='8'
                    value={scaleValue}
                />
            }
        </Container>
    );
};

export default ComparatorOptions;
