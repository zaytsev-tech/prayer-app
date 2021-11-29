import { css } from 'styled-components';

export const typography = {
  body: {
    title: css`
      font-family: SF UI Text;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #514d47;
    `,
    item: css`
      font-family: SF UI Text;
      font-size: 17px;
      line-height: 20px;
      text-align: left;
      color: #514d47;
      font-weight: 600;
    `,
    button: css`
      font-family: SF UI Text;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
    `,
    mainDetails: css`
      font-family: SF UI Text;
      font-size: 22px;
      line-height: 26px;
      color: #bfb393;
    `,
    moreDetails: css`
      font-family: SF UI Text;
      font-size: 13px;
      line-height: 15px;
      color: #514d47;
    `,
    headerDetails: css`
      font-family: SF UI Text;
      font-size: 13px;
      line-height: 15px;
      display: flex;
      align-items: flex-end;
      text-transform: uppercase;
      color: #72a8bc;
    `,
  },
};
