import React, {Dispatch, useContext, useReducer as useReactReducer} from 'react';
import identity from 'lodash/identity';
import {Mode} from "../types";

// state type
export interface ToolsState {
    mode: Mode;
    images: any[];
    isReadyToCompare: boolean;
    scaleValue: string;
    backgroundPositions: { x: number, y: number };
}

// action types
export enum ActionType {
    UPDATE_MODE,
    UPLOAD_IMAGES,
    SWAP_IMAGES,
    SET_SCALE_VALUE,
    RESET_IMAGES_SETTINGS,
    SET_BACKGROUND_POSITIONS,
}

// action type
interface IUpdateModeAction {
    type: ActionType.UPDATE_MODE;
    payload: {
        mode: Mode;
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

interface SetScaleValueAction {
    type: ActionType.SET_SCALE_VALUE;
    payload: {
        scaleValue: string;
    };
}

interface SetBackgroundPositions {
    type: ActionType.SET_BACKGROUND_POSITIONS;
    payload: {
        backgroundPositions: { x: number, y: number };
    };
}

interface ResetImageSettings {
    type: ActionType.RESET_IMAGES_SETTINGS;
}


type ToolsAction = SetBackgroundPositions | SetScaleValueAction | IUpdateModeAction | ResetImageSettings | ISwapImagesAction | IUploadImagesAction;

// initial state
export const initialState: ToolsState = {
    mode: Mode.SLIDER_Y,
    images: [],
    isReadyToCompare: false,
    scaleValue: '1',
    backgroundPositions: { x: 0, y : 0 },
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
    if (action.type === ActionType.SET_SCALE_VALUE) {
        const { payload } = action;
        return {
            ...state,
            scaleValue: payload.scaleValue,
        };
    }
    if (action.type === ActionType.SET_BACKGROUND_POSITIONS) {
        const { payload } = action;
        return {
            ...state,
            backgroundPositions: payload.backgroundPositions,
        };
    }
    if (action.type === ActionType.RESET_IMAGES_SETTINGS) {
        return {
            ...state,
            mode: Mode.SLIDER_Y,
            scaleValue: '1',
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