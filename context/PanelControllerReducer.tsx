"use client";

export type StateProps = {
    power: boolean;
    isEnter: boolean;
    selectedPage: string;
};

export enum CONTROL_ACTION {
    POWER_TOGGLE,
    ENTERING,
    PAGE_SELECTED,
}

export type ControlActionProps =
    | { type: CONTROL_ACTION.POWER_TOGGLE }
    | { type: CONTROL_ACTION.ENTERING }
    | { type: CONTROL_ACTION.PAGE_SELECTED; payload: string };

export const reducer = (state: StateProps, action: ControlActionProps) => {
    switch (action.type) {
        case CONTROL_ACTION.POWER_TOGGLE:
            return {
                ...state,
                power: !state.power,
            };
        case CONTROL_ACTION.ENTERING:
            return {
                ...state,
                isEnter: true,
            };
        case CONTROL_ACTION.PAGE_SELECTED:
            return {
                ...state,
                selectedPage: action.payload,
            };
    }
};
