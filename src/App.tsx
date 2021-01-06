import React from 'react';
import Comparator from './components/Comparator';

import { MainContainer } from './styles';
import ComparatorOptions from "./components/ComparatorOptions";
import { ReducerContext, useReducer } from './reducers/toolsReducer';

const App = () =>  {
    const [state, dispatch] = useReducer();

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <MainContainer>
                <Comparator />
                <ComparatorOptions />
            </MainContainer>
        </ReducerContext.Provider>
    );
}

export default App;
