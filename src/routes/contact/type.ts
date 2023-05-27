export interface State {
  fullname: string;
  message: string;
  email: string;
  error: { [key: string]: string };
  mobile: string;
  msg: boolean;
  send: boolean;
  disabled: boolean;
  dissappear: boolean;
  validated: boolean;
  loader: boolean;
  isMobileView: boolean;
}