export enum ActionTypes {
  login = 'USER/LOGIN',
}

export interface Login {
  token: string;
}

export type UserAction = { type: ActionTypes.login; payload: Login };
