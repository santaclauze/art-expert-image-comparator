import React from 'react';
import Comparator from './components/Comparator';

import { MainContainer } from './styles';
import ComparatorOptions from "./components/ComparatorOptions";

const App = () => (
  <MainContainer>
    <Comparator />
    <ComparatorOptions />
  </MainContainer>
);

export default App;
