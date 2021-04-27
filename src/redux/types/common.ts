
export type TCommonAction =
    | IsLoading;

export const IS_LOADING = 'IS_LOADING';
export interface IsLoading {
    type: typeof IS_LOADING;
    payload: boolean;
}

export interface ICommonState {
    isLoading: boolean;
}