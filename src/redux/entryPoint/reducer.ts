import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  EntryPoint,
  EntryPointState,
  GET_ENTRY_POINT_ERROR,
  FETCH_ENTRY_POINT_URL,
  ENTRY_POINT_ADD_URL,
} from './types';

export const initialState: EntryPointState = {
  entryPointUrl: { questions_url: '' },
  error: undefined,
};

export const fetchEntryPoint = createAction(FETCH_ENTRY_POINT_URL);
export const setEntryPointError = createAction<Error>(GET_ENTRY_POINT_ERROR);
export const addEntryPoint = createAction<EntryPoint>(ENTRY_POINT_ADD_URL);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setEntryPointError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(fetchEntryPoint, () => {})
    .addCase(addEntryPoint, (state, action) => {
      state.entryPointUrl = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
