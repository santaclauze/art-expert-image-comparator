// @ts-nocheck
import React  from 'react';
import {
    Container
} from './styles';
import Uploader from "./components/Uploader";
import ImageComparator from "./components/ImageComparator";
import {useReducerContext} from "../../../../reducers/toolsReducer";

const Comparator = () => {
    const { state: { isReadyToCompare, cursorStyle } } = useReducerContext();

    return (
        <Container cursor={cursorStyle}>
            {isReadyToCompare ? (
                <ImageComparator />
            ) : (
                <Uploader />
            )}
        </Container>

    );
}

export default Comparator;
