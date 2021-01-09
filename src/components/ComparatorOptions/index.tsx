import React, {ChangeEvent} from 'react';
import { Button, Container, Heading } from './styles';
import {ActionType, useReducerContext} from "../../reducers/toolsReducer";
import { Cursors, Mode } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faArrowsAltV, faArrowsAltH, faSearch, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const ComparatorOptions = () => {
    const { dispatch, state: { mode , scaleValue, sliderStyles } } = useReducerContext();

    const handleSliderY = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.SLIDER_Y }})
        dispatch({ type: ActionType.SET_CURSOR_STYLE, payload: { cursorStyle: Cursors.SLIDER_Y }})
    }

    const handleSliderX= () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.SLIDER_X }})
        dispatch({ type: ActionType.SET_CURSOR_STYLE, payload: { cursorStyle: Cursors.SLIDER_X }})
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

    const handleSliderColor = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.SET_SLIDER_STYLES, payload: { sliderStyles: { color: event.target.value} } });
    }

    const handleSliderWidth = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.SET_SLIDER_STYLES, payload: { sliderStyles: { width: event.target.value} } });
    }

    return (
        <Container>
            <div>
                <Heading>Actions</Heading>
                <Button onClick={handleSliderY}><FontAwesomeIcon icon={faArrowsAltH} /></Button>
                <Button onClick={handleSliderX}><FontAwesomeIcon icon={faArrowsAltV} /></Button>
                <Button onClick={handleZoom}><FontAwesomeIcon icon={faSearch} /></Button>
                <Button onClick={handleSwap}><FontAwesomeIcon icon={faExchangeAlt} /></Button>
                <Button onClick={handleDrag}><FontAwesomeIcon icon={faArrowsAlt} /></Button>
                <Button onClick={handleResetImages}>Clear</Button>
                <Button onClick={handleResetSettings}>Reset Settings</Button>
            </div>
            <div>
                <Heading>Options</Heading>
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
                {(mode === Mode.SLIDER_X || mode === Mode.SLIDER_Y) &&
                    <>
                        <input
                            onChange={handleSliderColor}
                            type='color'
                            value={sliderStyles.color}
                        />
                        <input
                            onChange={handleSliderWidth}
                            type='number'
                            value={sliderStyles.width}
                        />
                    </>
                }
            </div>
        </Container>
    );
};

export default ComparatorOptions;
