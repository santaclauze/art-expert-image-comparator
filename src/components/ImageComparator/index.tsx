import React from 'react';
import { Container, ContainerLower, ContainerCover } from './styles';
import empty from '../../assets/aralLake-empty.jpeg';
import full from '../../assets/aralLake-full.jpeg';

const ImageComparator = () => {
    return (
        <Container>
            <ContainerLower>
                <img src={empty} id="lower" />
            </ContainerLower>
            <ContainerCover>
                <img src={full} id="cover" />
            </ContainerCover>
        </Container>
    );
};

export default ImageComparator;