import React from 'react';
import { Container, Overview, Viewer} from './styles';
import {useReducerContext} from "../../../../../../reducers/toolsReducer";

const OverviewImage = () => {
    const { state: { images } } = useReducerContext();
    return (
        <Container>
            <Overview src={images[0]} />
            <Viewer />
        </Container>
    );
};

export default OverviewImage;