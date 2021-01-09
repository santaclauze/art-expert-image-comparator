export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export type FileHandler = HTMLInputEvent | File;

export enum Mode {
    DRAG = 'DRAG',
    SLIDER_X = 'SLIDER_X',
    SLIDER_Y = 'SLIDER_Y',
    ZOOM = 'ZOOM',
}
