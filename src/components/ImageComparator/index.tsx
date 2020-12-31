import React from 'react';
import {useSlider} from 'react-use';
import { Container, ContainerLower, ContainerCover, Slider } from './styles';
import empty from '../../assets/aralLake-empty.jpeg';
import full from '../../assets/aralLake-full.jpeg';

const ImageComparator = () => {
    const ref = React.useRef(null);
    const { value } = useSlider(ref, {
        onScrubStart: () => {
            console.log('onScrubStop');
        },
    });

    return (
        <Container ref={ref}>
            <ContainerLower>
                <img src={empty} id="lower" alt="lower" />
            </ContainerLower>
            {/** @ts-ignore */}
            <Slider pos={value} />
            {/** @ts-ignore */}
            <ContainerCover pos={value}>
                <img src={full} id="cover" alt="cover" />
            </ContainerCover>
        </Container>
    );
};

export default ImageComparator;