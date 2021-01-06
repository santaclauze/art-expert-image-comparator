// @ts-nocheck
import React, { useState } from 'react';

import {
    Container
} from './styles';
import {FileHandler, HTMLInputEvent} from "../../types";
import Uploader from "./components/Uploader";
import ImageComparator from "./components/ImageComparator";

const Comparator = () => {
    const [imageCover, setImageCover] = useState<{ imageCover: string }>('');
    const [imageLower, setImageLower] = useState<{ imageLower: string }>('');

    const handleFile = (files: FileHandler[]) => {
        setImageCover(URL.createObjectURL(files[0]))
        setImageLower(URL.createObjectURL(files[1]))
    };

    const handleOnDragOver = (e: HTMLInputEvent) => {
        e.preventDefault();
    };

    const handleOndrop = (e: HTMLInputEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const imageFiles = e.dataTransfer.files;
        handleFile(imageFiles);
    };

    // const handleReset = () => {
    //   setPreviewUrl1('');
    //   setPreviewUrl2('');
    // }

    const isComparatorReady = imageCover && imageLower;
    console.log(isComparatorReady)
    return (
        <Container>
            {isComparatorReady ? (
                <ImageComparator
                    imageLower={imageLower}
                    imageCover={imageCover}
                    isComparatorReady={isComparatorReady}
                />
            ) : (
                <Uploader
                    handleOnDragOver={handleOnDragOver}
                    handleOnDrop={handleOndrop}
                    handleUploadedFiles={handleFile}
                />
            )}
            {/*<button onClick={handleReset}>Reset images</button>*/}
        </Container>

    );
}

export default Comparator;
