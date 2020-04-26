import Root from "../components/Root";
import Home from "../pages/Home";
const config = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
    ],
  },
];

export default config;
