import React, {useEffect, useState} from 'react';
import { DropContainer } from './styles';
import {useReducerContext} from "../../../../reducers/toolsReducer";

interface Props {
    previewUrl: string;
    scale: number;
}

const ImageDisplayer = ({ previewUrl, scale }: Props) => {
    const { state: { mode } } = useReducerContext();
    const [isClicked, setIsClicked] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

    console.log(mode, isClicked)
    useEffect(() => {
        if (mode !== 'drag') setIsClicked(false)
    }, [mode])

    const handleMouseDown = () => {
        if (mode !== 'drag') return setIsClicked(false)
        return setIsClicked(true)
    }

    const handleMouseUp = () => {
        return setIsClicked(false)
    }

    const handleMouseMove = (e: any) => {
        if (!isClicked) return;
        const x = e.clientX;
        const y = e.clientY;
        console.log(x,y)
        setBackgroundPosition({ x, y })
    }

    return (
        previewUrl ? (
            <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="displayed-image"
                style={{ backgroundPosition: `-${backgroundPosition.x}px -${backgroundPosition.y}px` ,backgroundImage: `url(${previewUrl})`, transform: `scale(${scale})`}}
            />
        ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
    );
}

export default ImageDisplayer;
