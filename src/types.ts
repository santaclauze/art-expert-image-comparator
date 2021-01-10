export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export type FileHandler = HTMLInputEvent | File;

export enum Mode {
    DRAG = 'DRAG',
    OPACITY = 'OPACITY',
    REPOSITION = 'REPOSITION',
    SLIDER_X = 'SLIDER_X',
    SLIDER_Y = 'SLIDER_Y',
    ZOOM = 'ZOOM',
}

export enum Cursors {
    DEFAULT = 'default',
    DRAG = 'move',
    SLIDER_X = 'row-resize',
    SLIDER_Y = 'col-resize',
    ZOOM = 'ZOOM',
}

export enum ArrowKeyCodes {
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
}

export const ARROW_KEY_CODES = [ArrowKeyCodes.UP,ArrowKeyCodes.RIGHT,ArrowKeyCodes.DOWN,ArrowKeyCodes.LEFT];
