import { ACTION1 } from "./constants";

export const demo1 = (
  state = {
    child1: {
      count: 0,
    },
    child2: {
      count: 0,
    },
  },
  action
) => {
  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
