// @ts-nocheck
import React, {useState} from 'react';
import {useSlider} from 'react-use';

import {Container, ContainerLower, ContainerCover, Slider, DropContainer} from './styles';

const ImageComparator = () => {
    const ref = React.useRef(null);
    const { value } = useSlider(ref);
    const[previewUrl1, setPreviewUrl1] = useState("");
    const[previewUrl2, setPreviewUrl2] = useState("");

    const handleFile = (file: any, number: number) => {
        if(number === 1) {
            setPreviewUrl1((URL.createObjectURL(file)))
        }
        if(number === 2) {
            setPreviewUrl2((URL.createObjectURL(file)))
        }
    }

    const handleOndragOver = (e: any) => {
        e.preventDefault();
    }
    const handleOndrop1 = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile, 1);
    }

    const handleOndrop2 = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile, 2);
    }

    // @ts-ignore
    return (
        <Container ref={ref}>
            <ContainerLower
                onDragOver = {handleOndragOver}
                onDrop = {handleOndrop1}
                id="lower"
            >
                { previewUrl1 ? <div className="image">
                    <img src={previewUrl1} alt='image' />
                </div> : <p>Drag and drop image here...</p>}
            </ContainerLower>
            <Slider pos={value || 0.5} />
            <ContainerCover
                pos={value || 0.5}
                onDragOver = {handleOndragOver}
                onDrop = {handleOndrop2}
                id="cover"
            >
                { previewUrl2 ? <div className="image">
                    <img src={previewUrl2} alt='image' />
                </div> : <p>Drag and drop image here...</p>}
            </ContainerCover>
        </Container>
    );
};

export default ImageComparator;