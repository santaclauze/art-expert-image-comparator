import React, { useState } from 'react';
import { DropContainer } from './styles';

interface Props {
    id: string;
}

const ImageDisplayer = ({ id }: Props) => {
    const[previewUrl, setPreviewUrl] = useState("");

    const handleFile = (file: any) => {
        setPreviewUrl(URL.createObjectURL(file));
    }

    const handleOndragOver = (e: any) => {
        e.preventDefault();
    }
    const handleOndrop = (e: any) => {
        console.log('dropped?')
        e.preventDefault();
        e.stopPropagation();
        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile);
    }

    return (
            <DropContainer
                onDragOver = {handleOndragOver}
                onDrop = {handleOndrop}
                id={id}
            >
                { previewUrl ? <div className="image">
                    <img src={previewUrl} alt='image' />
                </div> : <p>Drag and drop image here...</p>}
            </DropContainer>

    );
};

export default ImageDisplayer;