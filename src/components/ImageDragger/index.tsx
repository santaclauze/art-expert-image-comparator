import React from 'react';
import ReactCompareImage from 'react-compare-image';
import normal from '../../assets/normal.png';
import infra from '../../assets/infra.png';
import { Container } from './styles';
const ImageDragger = () => {
    return (
        <Container>
            <ReactCompareImage leftImage={normal} rightImage={infra} sliderLineWidth={1} vertical />
        </Container>
    );
};

export default ImageDragger;