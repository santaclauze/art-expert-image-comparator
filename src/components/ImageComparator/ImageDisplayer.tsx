import React from 'react';
import { DropContainer } from './styles';

interface Props {
    previewUrl: string;
}

const ImageDisplayer = ({ previewUrl }: Props) => (
  previewUrl ? (
      <img src={previewUrl} alt="displayer-preview" />
  ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
);

export default ImageDisplayer;
