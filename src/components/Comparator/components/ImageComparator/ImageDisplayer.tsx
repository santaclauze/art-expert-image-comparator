import React, {useEffect, useState} from 'react';
import { DropContainer } from './styles';
import {useReducerContext} from "../../../../reducers/toolsReducer";
import {Mode} from "../../../../types";

interface Props {
    previewUrl: string;
    index: number;
}

const ImageDisplayer = ({ previewUrl, index }: Props) => {
    const { state: { mode, scaleValue } } = useReducerContext();
    const [isClicked, setIsClicked] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
    const [prepareBackgroundPosition, setPrepareBackgroundPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (mode !== Mode.DRAG) setIsClicked(false)
    }, [mode])

    const handleMouseDown = (e: any) => {
        if (mode !== Mode.DRAG) return setIsClicked(false)
        setPrepareBackgroundPosition({ x: e.clientX, y: e.clientY})
        return setIsClicked(true)
    }

    const handleMouseUp = () => {
        return setIsClicked(false)
    }

    const handleMouseMove = (e: any) => {
        if (!isClicked) return;
        const x = e.clientX - prepareBackgroundPosition.x;
        const y = e.clientY - prepareBackgroundPosition.y;
        setBackgroundPosition({ x, y })
    }

    return (
        previewUrl ? (
            <div
                id={`displayed-image-${index}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ backgroundImage: `url(${previewUrl})`, transform: `scale(${scaleValue})`, margin: `${backgroundPosition.x}px -1000px 0px ${backgroundPosition.y}px` }}
            />
        ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
    );
};

export default ImageDisplayer;
