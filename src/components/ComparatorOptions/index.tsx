import React, {ChangeEvent} from 'react';
import { Button, Container, Heading, ActionsGroup } from './styles';
import {ActionType, useReducerContext} from "../../reducers/toolsReducer";
import { Cursors, Mode } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faArrowsAltV, faArrowsAltH, faSearch, faExchangeAlt, faAdjust, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import {makeHints} from "./helpers";

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

    const handleOpacity = () => {
        dispatch({ type: ActionType.UPDATE_MODE, payload: { mode: Mode.OPACITY } });
    }

    const handleOpacityChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.SET_OPACITY_VALUE, payload: { opacityValue: event.target.value } });
    }

    const handleLock = () => {
        dispatch({ type: ActionType.TOGGLE_LOCK, payload: { isLocked: !state.isLocked } });
    }

    return (
        <Container>
            <div>
                <Heading>Actions</Heading>
                <ActionsGroup>
                    <Button onClick={handleSliderY} title="Y axis slider" active={state.mode === Mode.SLIDER_Y}><FontAwesomeIcon icon={faArrowsAltH} /></Button>
                    <Button onClick={handleSliderX} title="X axis slider" active={state.mode === Mode.SLIDER_X}><FontAwesomeIcon icon={faArrowsAltV} /></Button>
                    <Button onClick={handleLock} title={state.isLocked ? 'Unlocks slider' : 'Lock slider'} active={state.isLocked}><FontAwesomeIcon icon={state.isLocked ? faLock : faLockOpen} /></Button>
                    <Button onClick={handleRepositionImage1} title="Reposition right Image" active={state.mode === Mode.REPOSITION}>Reposition Right Image</Button>
                    <Button onClick={handleZoom} title="Enable zoom options" active={state.mode === Mode.ZOOM}><FontAwesomeIcon icon={faSearch} /></Button>
                    <Button onClick={handleOpacity} title="Enable opacity options" active={state.mode === Mode.OPACITY}><FontAwesomeIcon icon={faAdjust} /></Button>
                    <Button onClick={handleDrag} title="Move both images" active={state.mode === Mode.DRAG}><FontAwesomeIcon icon={faArrowsAlt} /></Button>
                </ActionsGroup>
                <hr />
                <ActionsGroup>
                    <Button onClick={handleSwap} title="Swap both images"><FontAwesomeIcon icon={faExchangeAlt} /></Button>
                    <Button onClick={handleResetImages} title="Clear images and upload new ones">Clear</Button>
                    <Button onClick={handleResetSettings} title="Reset settings">Reset Settings</Button>
                </ActionsGroup>
            </div>
            <div>
                <Heading>Options</Heading>
                <>
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
                    {state.mode === Mode.OPACITY &&
                    <input
                        onChange={handleOpacityChange}
                        type='range'
                        step='0.1'
                        min='0'
                        max='1'
                        value={state.opacityValue}
                    />
                    }
                    {(state.mode === Mode.SLIDER_X || state.mode === Mode.SLIDER_Y) &&
                    <>
                        <>
                        <input
                            onChange={handleSliderColor}
                            type='color'
                            value={state.sliderStyles.color}
                        />
                        </>
                        <input
                            onChange={handleSliderWidth}
                            type='number'
                            value={state.sliderStyles.width}
                        />
                    </>
                    }
                </>
            </div>
            <div>
                <Heading>Hints</Heading>
                {makeHints(state.mode)}
            </div>
            {/*<div style={{ color: 'white', overflowWrap: 'anywhere' }}>{JSON.stringify(state)}</div>*/}
        </Container>
    );
};

export default ComparatorOptions;
