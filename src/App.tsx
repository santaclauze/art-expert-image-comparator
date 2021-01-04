import React from 'react';
import ImageComparator from './components/ImageComparator';

import { MainContainer } from './styles';
import ComparatorOptions from "./components/ComparatorOptions";

const App = () => (
  <MainContainer>
    <ImageComparator />
    <ComparatorOptions />
  </MainContainer>
);

export default App;
