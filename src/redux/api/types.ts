import { ApiResultType } from '../../api/types';
export const API_DATA_LOADING = 'API_DATA_LOADING';
export const API_DATA_LOADED = 'API_DATA_LOADED';

interface ApiDataLoadingAction {
  type: typeof API_DATA_LOADING
}

interface ApiDataLoadedAction {
  type: typeof API_DATA_LOADED,
  payload: ApiResultType
}

export type ApiActionTypes = ApiDataLoadedAction | ApiDataLoadingAction;