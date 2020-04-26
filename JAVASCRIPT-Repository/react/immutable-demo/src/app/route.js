import Root from "../components/Root";
import Home from "../pages/Home";
import Chapter1 from "../pages/immer/chapter1";
import Chapter2 from "../pages/immer/chapter2";
import Chapter3 from "../pages/immer/chapter3";

const config = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/immer/1",
        exact: true,
        component: Chapter1,
      },
      {
        path: "/immer/2",
        exact: true,
        component: Chapter2,
      },
      {
        path: "/immer/3",
        exact: true,
        component: Chapter3,
      },
    ],
  },
];

export default config;
