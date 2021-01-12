import React from 'react';
import {Container} from './styles';
import {ActionType, useReducerContext} from "../../../../../../reducers/toolsReducer";

const Uploader = () => {
    const { dispatch } = useReducerContext();

    const handleFiles = (files: any) => {
        const images = [URL.createObjectURL(files[0]), URL.createObjectURL(files[1])];
        dispatch({ type: ActionType.UPLOAD_IMAGES, payload: { images }})
    };

    const handleOnDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleOnDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const imageFiles = e.dataTransfer.files;
        handleFiles(imageFiles);
    };

    return (
        <Container
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
        >
            Drop 2 files here.
            <input type='file' multiple onChange={(e) => handleFiles(e.target.files)}/>
        </Container>
    );
};

export default Uploader;
