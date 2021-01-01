// @ts-nocheck
import React, { useState } from 'react';
import { useSlider } from 'react-use';

import {
  Container, ContainerLower, ContainerCover, Slider, InitContainer,
} from './styles';
import ImageDisplayer from "./ImageDisplayer";

const ImageComparator = () => {
  const ref = React.useRef(null);
  const { value } = useSlider(ref);
  const [previewUrl1, setPreviewUrl1] = useState('');
  const [previewUrl2, setPreviewUrl2] = useState('');

  const handleFile = (file: any, number: number) => {
    if (number === 1) {
      setPreviewUrl1((URL.createObjectURL(file)));
    }
    if (number === 2) {
      setPreviewUrl2((URL.createObjectURL(file)));
    }
  };

  const handleOndragOver = (e: any) => {
    e.preventDefault();
  };
  const handleOndrop1 = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const imageFile = e.dataTransfer.files[0];
    handleFile(imageFile, 1);
  };

  const handleOndrop2 = (e: any) => {
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
            <p>Drop both files that you wish to compare...</p>
          </InitContainer>
      )}
      <Slider pos={(previewUrl1 && previewUrl2) ? value : 0.5} />
      {previewUrl2 ? (
          <ContainerCover
              pos={value || 1}
              id="cover"
          >
            <ImageDisplayer previewUrl={previewUrl2} />
          </ContainerCover>
      ) : (
          <InitContainer
              onDragOver={handleOndragOver}
              onDrop={handleOndrop2}
          >
            <p>Drop both files that you wish to compare...</p>
          </InitContainer>
      )}
    </Container>
  );
};

export default ImageComparator;
