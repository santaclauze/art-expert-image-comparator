import React from 'react';
import { DropContainer } from './styles';
import {ActionType, useReducerContext} from "../../../../reducers/toolsReducer";
import {useKey} from 'react-use';

interface Props {
    previewUrl: string;
    index: number;
}

const ImageDisplayer = ({ previewUrl, index }: Props) => {
    const { dispatch, state: { scaleValue, backgroundPositions } } = useReducerContext();


    const moveUp = () =>
    dispatch({
        type: ActionType.SET_BACKGROUND_POSITIONS,
        payload: { backgroundPositions: {
            ...backgroundPositions,
            x: ++backgroundPositions.x
        }}
    })
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

    return (
        previewUrl ? (
            <div
                id={`displayed-image-${index}`}
                style={{
                    backgroundImage: `url(${previewUrl})`,
                    transform: `scale(${scaleValue})`,
                    margin: `${backgroundPositions.x}px -1000px 0px ${backgroundPositions.y}px`
                }}
            />
        ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
    );
};

export default ImageDisplayer;
