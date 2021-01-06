import React, {Dispatch, useContext, useReducer as useReactReducer} from 'react';
import identity from 'lodash/identity';

// state type
export interface ToolsState {
    mode: string;
    images: any[];
    isReadyToCompare: boolean;
}

// action types
export enum ActionType {
    UPDATE_MODE,
    UPLOAD_IMAGES,
    SWAP_IMAGES,
}

// action type
interface IUpdateModeAction {
    type: ActionType.UPDATE_MODE;
    payload: {
        mode: string;
    };
}

interface IUploadImagesAction {
    type: ActionType.UPLOAD_IMAGES;
    payload: {
        images: any[];
    };
}

interface ISwapImagesAction {
    type: ActionType.SWAP_IMAGES;
}


type ToolsAction = IUpdateModeAction | ISwapImagesAction | IUploadImagesAction;

// initial state
export const initialState: ToolsState = {
    mode: 'sliderY',
    images: [],
    isReadyToCompare: false,
};

// reducer
export const reducer = (
    state = initialState,
    action: ToolsAction,
): ToolsState => {
    if (action.type === ActionType.UPDATE_MODE) {
        const { payload } = action;
        return {
            ...state,
            mode: payload.mode,
        };
    }
    if (action.type === ActionType.UPLOAD_IMAGES) {
        const { payload } = action;
        const isReadyToCompare = payload.images.length === 2
        return {
            ...state,
            images: payload.images,
            isReadyToCompare,
        };
    }
    if (action.type === ActionType.SWAP_IMAGES) {
        return {
            ...state,
            images: state.images.reverse(),
        };
    }
    return state;
};

// reducer hook
export const useReducer = () =>
    useReactReducer<
        (
            prevState: ToolsState,
            action: ToolsAction,
        ) => ToolsState
        >(reducer, initialState);

export type IDispatchFn = Dispatch<ToolsAction>;

// context type
export interface IReducerContext {
    state: ToolsState;
    dispatch: IDispatchFn;
}

//
export const ReducerContext = React.createContext<IReducerContext>({
    state: initialState,
    dispatch: identity,
});

export const useReducerContext = () => useContext(ReducerContext);