import React from 'react';
import { DropContainer } from './styles';

interface Props {
    previewUrl: string;
    scale: number;
}

const ImageDisplayer = ({ previewUrl, scale }: Props) => (
  previewUrl ? (
      <div className="displayed-image" style={{ backgroundImage: `url(${previewUrl})`, transform: `scale(${scale})` }} />
  ) : <DropContainer><p>Drag and drop image here...</p></DropContainer>
);

export default ImageDisplayer;
