import React, {Dispatch, useContext, useReducer as useReactReducer} from 'react';
import identity from 'lodash/identity';
import {Cursors, Mode} from "../types";

// state type
export interface ToolsState {
    mode: Mode;
    images: any[];
    isLocked: boolean;
    isReadyToCompare: boolean;
    scaleValue: string;
    opacityValue: string;
    backgroundPositions: { x: number, y: number };
    repositionImage1: { x: number, y: number };
    cursorStyle: Cursors;
    sliderStyles: {
        width: string;
        color: string;
    }
}

// action types
export enum ActionType {
    UPDATE_MODE,
    UPLOAD_IMAGES,
    SWAP_IMAGES,
    SET_SCALE_VALUE,
    RESET_IMAGES_SETTINGS,
    SET_BACKGROUND_POSITIONS,
    SET_REPOSITION_IMAGE_1,
    SET_CURSOR_STYLE,
    SET_SLIDER_STYLES,
    SET_OPACITY_VALUE,
    TOGGLE_LOCK,
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

interface SetOpacityValueAction {
    type: ActionType.SET_OPACITY_VALUE;
    payload: {
        opacityValue: string;
    };
}

interface ToggleLockAction {
    type: ActionType.TOGGLE_LOCK;
    payload: {
        isLocked: boolean;
    };
}

interface SetBackgroundPositions {
    type: ActionType.SET_BACKGROUND_POSITIONS;
    payload: {
        backgroundPositions: { x: number, y: number };
    };
}

interface SetRepositionImage1 {
    type: ActionType.SET_REPOSITION_IMAGE_1;
    payload: {
        repositionImage1: { x: number, y: number };
    };
}

interface SetSliderStyles {
    type: ActionType.SET_SLIDER_STYLES;
    payload: {
        sliderStyles: { width?: string, color?: string };
    };
}

interface SetCursorStyle {
    type: ActionType.SET_CURSOR_STYLE;
    payload: {
        cursorStyle: ToolsState['cursorStyle'];
    };
}

interface ResetImageSettings {
    type: ActionType.RESET_IMAGES_SETTINGS;
}


type ToolsAction = ToggleLockAction | SetOpacityValueAction | SetRepositionImage1 | SetSliderStyles | SetCursorStyle | SetBackgroundPositions | SetScaleValueAction | IUpdateModeAction | ResetImageSettings | ISwapImagesAction | IUploadImagesAction;

// initial state
export const initialState: ToolsState = {
    mode: Mode.SLIDER_Y,
    images: [],
    isReadyToCompare: false,
    scaleValue: '1',
    opacityValue: '1',
    isLocked: false,
    backgroundPositions: { x: 0, y : 0 },
    repositionImage1: { x: 0, y : 0 },
    cursorStyle: Cursors.DEFAULT,
    sliderStyles: {
        width: '1',
        color: 'black',
    }
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
    if (action.type === ActionType.SET_OPACITY_VALUE) {
        const { payload } = action;
        return {
            ...state,
            opacityValue: payload.opacityValue,
        };
    }
    if (action.type === ActionType.TOGGLE_LOCK) {
        const { payload } = action;
        return {
            ...state,
            isLocked: payload.isLocked,
        };
    }
    if (action.type === ActionType.SET_BACKGROUND_POSITIONS) {
        const { payload } = action;
        return {
            ...state,
            backgroundPositions: payload.backgroundPositions,
        };
    }
    if (action.type === ActionType.SET_REPOSITION_IMAGE_1) {
        const { payload } = action;
        return {
            ...state,
            repositionImage1: payload.repositionImage1,
        };
    }
    if (action.type === ActionType.SET_CURSOR_STYLE) {
        const { payload } = action;
        return {
            ...state,
            cursorStyle: payload.cursorStyle,
        };
    }
    if (action.type === ActionType.SET_SLIDER_STYLES) {
        const { payload } = action;
        return {
            ...state,
            sliderStyles: {
                ...state.sliderStyles,
                ...payload.sliderStyles
            },
        };
    }
    if (action.type === ActionType.RESET_IMAGES_SETTINGS) {
        return {
            ...state,
            mode: Mode.SLIDER_Y,
            scaleValue: '1',
            opacityValue: '1',
            cursorStyle: Cursors.DEFAULT,
            backgroundPositions: { x: 0, y : 0 },
            repositionImage1: { x: 0, y : 0 },
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