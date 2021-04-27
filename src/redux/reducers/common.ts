import { ICommonState, IS_LOADING, TCommonAction } from "../types/common";


const defaultState: ICommonState = {
    isLoading: false,
};

const commonReducer = (
    state = defaultState,
    action: TCommonAction,
): ICommonState => {
    switch (action.type) {
        case IS_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default commonReducer;
