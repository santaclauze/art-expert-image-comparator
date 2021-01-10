import React, {useCallback, useEffect} from 'react';
import { DropContainer } from './styles';
import {ActionType, useReducerContext} from "../../../../reducers/toolsReducer";
import {ARROW_KEY_CODES, ArrowKeyCodes, Mode} from "../../../../types";

interface Props {
    previewUrl: string;
    index: number;
}

const ImageDisplayer = ({ previewUrl, index }: Props) => {
    const { dispatch, state: { scaleValue, backgroundPositions, repositionImage1, mode } } = useReducerContext();

    const keyDownDrag = useCallback((event) => {
        if(!ARROW_KEY_CODES.includes(event.keyCode) || mode !== Mode.DRAG) return;
        if(event.keyCode === ArrowKeyCodes.UP) {
            console.log('wtf?????????????????????')
            dispatch({
                type: ActionType.SET_BACKGROUND_POSITIONS,
                payload: { backgroundPositions: {
                        ...backgroundPositions,
                        x: ++backgroundPositions.x
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.DOWN) {
            dispatch({
                type: ActionType.SET_BACKGROUND_POSITIONS,
                payload: { backgroundPositions: {
                        ...backgroundPositions,
                        x: --backgroundPositions.x
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.LEFT) {
            dispatch({
                type: ActionType.SET_BACKGROUND_POSITIONS,
                payload: { backgroundPositions: {
                        ...backgroundPositions,
                        y: ++backgroundPositions.y
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.RIGHT) {
            dispatch({
                type: ActionType.SET_BACKGROUND_POSITIONS,
                payload: { backgroundPositions: {
                        ...backgroundPositions,
                        y: --backgroundPositions.y
                    }}
            })
        }
    }, [backgroundPositions, dispatch, mode]);

    const keyDownReposition = useCallback((event) => {
        if(!ARROW_KEY_CODES.includes(event.keyCode) || mode !== Mode.REPOSITION) return;
        if(event.keyCode === ArrowKeyCodes.UP) {
            dispatch({
                type: ActionType.SET_REPOSITION_IMAGE_1,
                payload: { repositionImage1: {
                        ...repositionImage1,
                        x: ++repositionImage1.x
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.DOWN) {
            dispatch({
                type: ActionType.SET_REPOSITION_IMAGE_1,
                payload: { repositionImage1: {
                        ...repositionImage1,
                        x: --repositionImage1.x
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.LEFT) {
            dispatch({
                type: ActionType.SET_REPOSITION_IMAGE_1,
                payload: { repositionImage1: {
                        ...repositionImage1,
                        y: --repositionImage1.y
                    }}
            })
        }
        if(event.keyCode === ArrowKeyCodes.RIGHT) {
            dispatch({
                type: ActionType.SET_REPOSITION_IMAGE_1,
                payload: { repositionImage1: {
                        ...repositionImage1,
                        y: ++repositionImage1.y
                    }}
            })
        }
    }, [dispatch, mode, repositionImage1]);

    useEffect(() => {
        if(mode === Mode.DRAG) {
            document.addEventListener("keydown", keyDownDrag, false);
        } else if (mode === Mode.REPOSITION) {
            document.addEventListener("keydown", keyDownReposition, false);
        }
        return () => {
            document.removeEventListener("keydown", keyDownDrag, false);
            document.removeEventListener("keydown", keyDownReposition, false);
        };
    }, [keyDownDrag, keyDownReposition, mode]);

    const positionX = index === 1 ? backgroundPositions.x + repositionImage1.x : backgroundPositions.x;
    const positionY = index === 1 ? backgroundPositions.y + repositionImage1.y : backgroundPositions.y;

    return (
        previewUrl ? (
            <div
                id={`displayed-image-${index}`}
                style={{
                    backgroundImage: `url(${previewUrl})`,
                    transform: `scale(${scaleValue})`,
                    margin: `${positionX}px -1000px 0px ${positionY}px`
                }}
            />
        ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
    );
};

export default ImageDisplayer;
