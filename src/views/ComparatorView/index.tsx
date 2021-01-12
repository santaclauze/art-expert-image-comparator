import React from 'react';
import {ReducerContext, useReducer} from "../../reducers/toolsReducer";
import {MainContainer} from "../../styles";
import Comparator from "./components/Comparator";
import ComparatorOptions from "./components/ComparatorOptions";

const ComparatorView = () => {
    const [state, dispatch] = useReducer();

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <MainContainer>
                <Comparator />
                <ComparatorOptions />
            </MainContainer>
        </ReducerContext.Provider>
    );
};

export default ComparatorView;
