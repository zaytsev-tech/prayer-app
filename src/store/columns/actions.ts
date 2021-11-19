import { createAction } from '@reduxjs/toolkit';

export enum ColumnActions {
  columnRequest = 'COLUMN/GET',
}

export const columnRequest = createAction<string>(ColumnActions.columnRequest);
