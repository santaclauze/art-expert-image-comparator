import React from 'react';
import { DropContainer } from './styles';
import {ActionType, useReducerContext} from "../../../../reducers/toolsReducer";
import {useKey} from 'react-use';
import {Mode} from "../../../../types";

interface Props {
    previewUrl: string;
    index: number;
}

const ImageDisplayer = ({ previewUrl, index }: Props) => {
    const { dispatch, state: { scaleValue, backgroundPositions, repositionImage1, mode } } = useReducerContext();


    const moveUp = () =>
    dispatch({
        type: ActionType.SET_BACKGROUND_POSITIONS,
        payload: { backgroundPositions: {
            ...backgroundPositions,
            x: ++backgroundPositions.x
        }}
    })
    //
    // const moveSingleUp = () =>
    //     dispatch({
    //         type: ActionType.SET_REPOSITION_IMAGE_1,
    //         payload: { repositionImage1: {
    //                 ...repositionImage1,
    //                 x: ++repositionImage1.x
    //             }}
    //     })
    //
    // const moveSingleDown = () =>
    //     dispatch({
    //         type: ActionType.SET_REPOSITION_IMAGE_1,
    //         payload: { repositionImage1: {
    //                 ...repositionImage1,
    //                 x: --repositionImage1.x
    //             }}
    //     })

    const moveDown = () =>
        dispatch({
            type: ActionType.SET_BACKGROUND_POSITIONS,
            payload: { backgroundPositions: {
                    ...backgroundPositions,
                    x: --backgroundPositions.x
                }}
        })
    const moveLeft = () =>
        dispatch({
            type: ActionType.SET_BACKGROUND_POSITIONS,
            payload: { backgroundPositions: {
                    ...backgroundPositions,
                    y: ++backgroundPositions.y
                }}
        })
    const moveRight = () =>
        dispatch({
            type: ActionType.SET_BACKGROUND_POSITIONS,
            payload: { backgroundPositions: {
                    ...backgroundPositions,
                    y: --backgroundPositions.y
                }}
        })

    useKey('ArrowUp', moveUp);
    useKey('ArrowDown', moveDown);
    useKey('ArrowLeft', moveLeft);
    useKey('ArrowRight', moveRight);

    const positionX = index === 0 ? backgroundPositions.x + repositionImage1.x : backgroundPositions.x;
    const positionY = index === 0 ? backgroundPositions.y + repositionImage1.y : backgroundPositions.y;

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
