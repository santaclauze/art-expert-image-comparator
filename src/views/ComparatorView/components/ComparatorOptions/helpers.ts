import {Mode} from "../../../../types";

export const makeHints = (mode: Mode) => {
    switch(mode) {
        case Mode.DRAG:
            return 'Use the arrow keys of your keyboard to move both images';
        case Mode.ZOOM:
            return 'Zoom on both images';
        case Mode.SLIDER_Y:
            return 'Enable slider of the Y axis';
        case Mode.SLIDER_X:
            return 'Enable slider of the X axis';
        case Mode.OPACITY:
            return 'Set transparency on the left image';
        case Mode.REPOSITION:
            return 'Use the arrow keys of your keyboard to the right image if you are trying to re-align both pictures';
    }
}