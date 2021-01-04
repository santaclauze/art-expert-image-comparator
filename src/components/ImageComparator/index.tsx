// @ts-nocheck
import React, { useState } from 'react';
import { useSlider } from 'react-use';

import {
  Container, ContainerLower, ContainerCover, Slider, InitContainer,
} from './styles';
import ImageDisplayer from "./ImageDisplayer";
import {FileHandler, HTMLInputEvent} from "../../types";

const ImageComparator = () => {
  const ref = React.useRef(null);
  const { value } = useSlider(ref);
  const [previewUrl1, setPreviewUrl1] = useState<{ previewUrl1: string }>('');
  const [previewUrl2, setPreviewUrl2] = useState<{ previewUrl2: string }>('');

  const handleFile = (file: FileHandler, imageNumber: number) => {
    const fileToPreview = file.target ? file.target.files[0] : file;
    if (imageNumber === 1) {
      setPreviewUrl1((URL.createObjectURL(fileToPreview)));
    }
    if (imageNumber === 2) {
      setPreviewUrl2((URL.createObjectURL(fileToPreview)));
    }
  };

  const handleOndragOver = (e: HTMLInputEvent) => {
    e.preventDefault();
  };
  const handleOndrop1 = (e: HTMLInputEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const imageFile = e.dataTransfer.files[0];
    handleFile(imageFile, 1);
  };

  const handleOndrop2 = (e: HTMLInputEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const imageFile = e.dataTransfer.files[0];
    handleFile(imageFile, 2);
  };

  return (
    <Container ref={ref}>
      {previewUrl1 ? (
          <ContainerLower
              id="lower"
          >
            <ImageDisplayer previewUrl={previewUrl1} />
          </ContainerLower>
      ) : (
          <InitContainer
              onDragOver={handleOndragOver}
              onDrop={handleOndrop1}
          >
            <input type="file" onChange={(file: File) => handleFile(file, 1)}/>
            <p>Drop both files that you wish to compare...</p>
          </InitContainer>
      )}
      <Slider pos={(previewUrl1 && previewUrl2) ? value : 0.5} />
      {previewUrl2 ? (
          <ContainerCover
              pos={previewUrl1 && previewUrl2 ? value : 1}
              id="cover"
          >
            <ImageDisplayer previewUrl={previewUrl2} />
          </ContainerCover>
      ) : (
          <InitContainer
              onDragOver={handleOndragOver}
              onDrop={handleOndrop2}
          >
            <input type="file" onChange={(file: File) => handleFile(file, 2)}/>
            <p>Drop both files that you wish to compare...</p>
          </InitContainer>
      )}
    </Container>
  );
}

export default ImageComparator;
