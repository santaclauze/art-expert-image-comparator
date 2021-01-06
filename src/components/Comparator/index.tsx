// @ts-nocheck
import React  from 'react';
import {
    Container
} from './styles';
import Uploader from "./components/Uploader";
import ImageComparator from "./components/ImageComparator";
import {useReducerContext} from "../../reducers/toolsReducer";

const Comparator = () => {
    const { state: { isReadyToCompare } } = useReducerContext();

    return (
        <Container>
            {isReadyToCompare ? (
                <ImageComparator />
            ) : (
                <Uploader />
            )}
        </Container>

    );
}

export default Comparator;
