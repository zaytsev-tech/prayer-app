import { createAction } from '@reduxjs/toolkit';

import { Column } from './types';

export enum ColumnActions {
  columnRequest = 'COLUMN/GET',
  setColumnRequest = 'COLUMN/POST',
}

export const columnRequest = createAction(ColumnActions.columnRequest);
export const setColumnRequest = createAction<Column>(ColumnActions.setColumnRequest);
