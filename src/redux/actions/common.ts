import { IS_LOADING, TCommonAction } from "../types/common";

export const setIsLoading = (isLoading: boolean): TCommonAction => ({
  type: IS_LOADING,
  payload: isLoading,
});
