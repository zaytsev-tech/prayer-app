import { createAction } from '@reduxjs/toolkit';

import { Column } from './types';

interface SetColumnProps {
  token: string;
  column: Column;
}

export enum ColumnActions {
  columnRequest = 'COLUMN/GET',
  setColumnRequest = 'COLUMN/POST',
}

export const columnRequest = createAction<string>(ColumnActions.columnRequest);
export const setColumnRequest = createAction<SetColumnProps>(
  ColumnActions.setColumnRequest,
);
