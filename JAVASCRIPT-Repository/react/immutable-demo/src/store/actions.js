import { ACTION1 } from "./constants";

export const plus = (data) => {
  return {
    type: ACTION1,
    payload: data,
  };
};
