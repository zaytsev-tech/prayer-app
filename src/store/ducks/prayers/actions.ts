import { createAction } from '@reduxjs/toolkit';

export enum ColumnActions {
  columnRequest = 'COLUMN/GET',
  setColumnRequest = 'COLUMN/POST',
}

export const columnRequest = createAction<string>(ColumnActions.columnRequest);
