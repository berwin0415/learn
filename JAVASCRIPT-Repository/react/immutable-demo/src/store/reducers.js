import { ACTION1 } from "./constants";
import produce from "immer";
const initState = {
  members: [
    {
      name: "ronffy",
      age: 30,
    },
  ],
};
// export const immer = (state, action) =>
//   produce((state = initState), (draft) => {
//     switch (action.type) {
//       case "ADD_AGE":
//         draft.members[0].age++;
//         break;
//       default:
//         return draft;
//     }
//   });

export const immer = produce((draft = initState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      draft.members[0].age++;
      break;
    default:
      return draft;
  }
});
// export const immer = (state = initState, action) => {
//   switch (action.type) {
//     case "ADD_AGE":
//       const { members } = state;
//       return {
//         ...state,
//         members: [
//           {
//             ...members[0],
//             age: members[0].age + 1,
//           },
//           ...members.slice(1),
//         ],
//       };
//     default:
//       return state;
//   }
// };

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
