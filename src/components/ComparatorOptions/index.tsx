import React, {ChangeEvent} from 'react';
import { Button, Container, Heading } from './styles';
import {ActionType, useReducerContext} from "../../reducers/toolsReducer";
import { Cursors, Mode } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faArrowsAltV, faArrowsAltH, faSearch, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const ComparatorOptions = () => {
    const { dispatch, state } = useReducerContext();

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

    const handleRepositionImage1 = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.REPOSITION } });

    }

    return (
        <Container>
            <div>
                <Heading>Actions</Heading>
                <Button onClick={handleSliderY} active={state.mode === Mode.SLIDER_Y}><FontAwesomeIcon icon={faArrowsAltH} /></Button>
                <Button onClick={handleSliderX} active={state.mode === Mode.SLIDER_X}><FontAwesomeIcon icon={faArrowsAltV} /></Button>
                <Button onClick={handleRepositionImage1} active={state.mode === Mode.REPOSITION}>Reposition Image 1</Button>
                <Button onClick={handleZoom} active={state.mode === Mode.ZOOM}><FontAwesomeIcon icon={faSearch} /></Button>
                <Button onClick={handleDrag} active={state.mode === Mode.DRAG}><FontAwesomeIcon icon={faArrowsAlt} /></Button>
                <hr />
                <Button onClick={handleSwap}><FontAwesomeIcon icon={faExchangeAlt} /></Button>
                <Button onClick={handleResetImages}>Clear</Button>
                <Button onClick={handleResetSettings}>Reset Settings</Button>
            </div>
            <div>
                <Heading>Options</Heading>
                {state.mode === Mode.ZOOM &&
                    <input
                        onChange={handleZoomChange}
                        type='range'
                        step='1'
                        min='1'
                        max='8'
                        value={state.scaleValue}
                    />
                }
                {(state.mode === Mode.SLIDER_X || state.mode === Mode.SLIDER_Y) &&
                    <>
                        <input
                            onChange={handleSliderColor}
                            type='color'
                            value={state.sliderStyles.color}
                        />
                        <input
                            onChange={handleSliderWidth}
                            type='number'
                            value={state.sliderStyles.width}
                        />
                    </>
                }
            </div>
            <div style={{ color: 'white', overflowWrap: 'anywhere' }}>{JSON.stringify(state)}</div>
        </Container>
    );
};

export default ComparatorOptions;
