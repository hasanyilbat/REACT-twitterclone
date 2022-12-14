import AuthLayout from "../pages/AuthLayout";
import PrivateRoute from "../components/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      // {
      //     path: "login"
      // }
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
