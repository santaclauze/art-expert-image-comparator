import React from 'react';
import { Container } from './styles';

interface Props {
    // handleOnDragOver: (e: HTMLInputEvent) => void;
    handleOnDragOver: any;
    // handleOnDrop: (e: HTMLInputEvent) => void;
    handleOnDrop: any;
    // handleUploadedFiles: (e: HTMLInputEvent) => void;
    handleUploadedFiles: any;
}

const Uploader = ({ handleOnDragOver, handleOnDrop, handleUploadedFiles }: Props) => {
    return (
        <Container
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
        >
            Drop 2 files here.
            <input type='file' multiple onChange={(e) => handleUploadedFiles(e.target.files)}/>
        </Container>
    );
};

export default Uploader;
