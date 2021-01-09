export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export type FileHandler = HTMLInputEvent | File;

export enum Mode {
    DRAG = 'DRAG',
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
