export const GET_ENTRY_POINT_ERROR = 'entryPoint/set_error';
export const FETCH_ENTRY_POINT_URL = 'entryPoint/fetch_url';
export const ENTRY_POINT_ADD_URL = 'entryPoint/received_url';

export interface EntryPoint {
  questions_url: string;
}

export type EntryPointState = {
  error: any;
  entryPointUrl: EntryPoint;
};
