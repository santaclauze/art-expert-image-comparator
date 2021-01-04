export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export type FileHandler = HTMLInputEvent | File;
