import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CarbonEmission from "./extensions/CarbonEmission";

const ErrorElement = () => {
  let error = useRouteError();
  console.log(error);
  return <div>{`Error: ${JSON.stringify(error)}`}</div>;
};

const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <CarbonEmission />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/index.html",
    element: <CarbonEmission />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/carbon",
    element: <CarbonEmission />,
  },
]);

export default routes;
